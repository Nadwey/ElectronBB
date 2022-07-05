const { ipcRenderer } = require("electron");
const { IsObjectSupported } = require("../utils");
const isArray = require("isarray");
const { isPlainObject } = require("is-plain-object");
const crypto = require("crypto");

/**
 * @typedef {Object}
 * @property {String} bridgeID
 * @property {import("../main").ExportObject} object
 */

class RendererBridge {
    /**
     * Creates new RendererBridge instaance
     */
    constructor() {
        this.exports = new Map();
        this.functions = new Map();

        ipcRenderer.on("electronbb_renderer_get", (e, name, callback) => {
            const funcID = callback.value;
            ipcRenderer.invoke(`electronbb_renderer_raw_call`, funcID, [this.exports.get(name)]);
        });

        ipcRenderer.on("electronbb_renderer_call", async (e, funcID, args, callback) => {
            const func = this.functions.get(funcID);
            if (!func) ipcRenderer.invoke(`electronbb_renderer_raw_call`, callback.value);

            const result = await func(...args);
            ipcRenderer.invoke(`electronbb_renderer_raw_call`, callback.value, [result]);
        });
    }

    /**
     * @private
     * Creates function object
     *
     * @param {Function} func
     * @returns {ExportObject}
     */
    CreateFunctionObject(func) {
        const ID = crypto.randomBytes(16).toString("hex");
        if (!this.functions.has(ID)) {
            this.functions.set(ID, func);
            return {
                type: func.constructor.name === "AsyncFunction" ? "async_function" : "function",
                value: ID,
            };
        }
        return this.CreateFunctionObject(func);
    }

    /**
     * @private
     * Creates object ready to export to renderer
     *
     * @param {any} object
     * @returns {ExportObject}
     */
    CreateExportObject(object) {
        const type = typeof object;
        switch (type) {
            case "bigint": {
                return {
                    type: "bigint",
                    value: object.toString(),
                };
            }
            case "boolean": {
                return {
                    type: "boolean",
                    value: object,
                };
            }
            case "function": {
                return this.CreateFunctionObject(object);
            }
            case "number": {
                if (Number.isNaN(object))
                    return {
                        type: "nan",
                        value: null,
                    };
                return {
                    type: "number",
                    value: object,
                };
            }
            case "object": {
                if (IsObjectSupported(object)) {
                    return {
                        type: "object",
                        value: object,
                    };
                }
                if (isArray(object)) {
                    let objects = [];

                    object.forEach((e) => {
                        objects.push(this.CreateExportObject(e));
                    });

                    return {
                        type: "array",
                        value: objects,
                    };
                }
                if (isPlainObject(object)) {
                    const entries = Object.entries(object);
                    let out = {};

                    entries.forEach((e) => {
                        if (!e) return;
                        out[e[0]] = this.CreateExportObject(e[1]);
                    });

                    return {
                        type: "object",
                        value: out,
                    };
                }
                if (object === null) {
                    return {
                        type: "null",
                        value: null,
                    };
                }
                break;
            }
            case "string": {
                return {
                    type: "string",
                    value: object,
                };
            }
            case "symbol": {
                break;
            }
            case "undefined": {
                return {
                    type: "undefined",
                    value: null,
                };
            }
        }
    }

    /**
     * @private
     * Converts exported object to regular object, that can be used
     *
     * @param {import("../main").ExportObject} object
     */
    MakeRegularObject(object) {
        switch (object.type) {
            case "array": {
                let out = [];

                object.value.forEach((e) => {
                    out.push(this.MakeRegularObject(e));
                });

                return out;
            }
            case "bigint": {
                return BigInt(object.value);
            }
            case "boolean":
            case "number":
            case "string": {
                return object.value;
            }
            case "function": {
                let returnVal = (...args) => {
                    const funcID = object.value;
                    return this.MakeRegularObject(ipcRenderer.sendSync(`electronbb_callSync`, funcID, args));
                };
                returnVal.callIgnore = (...args) => {
                    const funcID = object.value;
                    return ipcRenderer.sendSync(`electronbb_renderer_raw_call`, funcID, args);
                }
                return returnVal;
            }
            case "async_function": {
                return async (...args) => {
                    const funcID = object.value;
                    return this.MakeRegularObject(await ipcRenderer.invoke(`electronbb_call`, funcID, args));
                };
            }
            case "nan": {
                return NaN;
            }
            case "object": {
                if (IsObjectSupported(object.value)) {
                    return object.value;
                }

                let out = {};

                Object.entries(object.value).forEach((e) => {
                    out[e[0]] = this.MakeRegularObject(e[1]);
                });

                return out;
            }
            case "null": {
                return null;
            }
            case "undefined": {
                return undefined;
            }
        }
    }

    async Get(name) {
        const obj = await ipcRenderer.invoke("electronbb_get", name);
        if (!obj) throw new Error("Failed to find specified object");
        return this.MakeRegularObject(obj);
    }

    /**
     * Gets exported object with specified name
     *
     * @param {String} name
     * @returns {any}
     */
    GetSync(name) {
        const obj = ipcRenderer.sendSync("electronbb_getSync", name);
        if (!obj) throw new Error("Failed to find specified object");
        return this.MakeRegularObject(obj);
    }

    /**
     * @private
     * Scans for function handlers and deletes them
     *
     * @param {ExportObject} object
     */
    purgeObject(object) {
        switch (object.type) {
            case "array": {
                object.value.forEach((e) => {
                    this.purgeObject(e);
                });
                break;
            }
            case "function": {
                this.functions.delete(object.value);
                break;
            }
            case "object": {
                Object.values(object).forEach((e) => {
                    this.purgeObject(e);
                });
                break;
            }
        }
    }

    /**
     * Deletes exported object from remderer, also unregisters function handlers
     *
     * @param {String} name
     */
    Delete(name) {
        if (!this.exports.has(name)) return;
        this.purgeObject(this.exports.get(name));
        this.exports.delete(name);
    }

    /**
     * Exports object to main
     *
     * @param {String} name
     * @param {any} object
     */
    Export(name, object) {
        const existingObject = this.exports.get(name);
        if (existingObject) this.purgeObject(existingObject);

        const exportObject = this.CreateExportObject(object);
        this.exports.set(name, exportObject);
    }

    /**
     * @privatae
     * @type {Map<string, import("../main").ExportObject>}
     */
    exports;

    /**
     * @private
     * @type {Map<string, Function>}
     */
    functions;
}

module.exports = RendererBridge;
