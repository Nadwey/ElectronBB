const { ipcMain } = require("electron");
const crypto = require("crypto");
const isArray = require("isarray");
const { isPlainObject } = require("is-plain-object");

/**
 * @typedef {Object} ExportObject
 * @property {any} value
 * @property {"bigint"|"boolean"|"function"|"async_function"|"number"|"nan"|"object"|"array"|"null"|"string"|"undefined"} type
 */

class MainBridge {
    constructor() {
        this.functions = new Map();
        this.exports = new Map();

        ipcMain.handle(`electronbb_get`, (e, name) => {
            return this.exports.get(name);
        });

        ipcMain.on(`electronbb_getSync`, (e, name) => {
            e.returnValue = this.exports.get(name);
        });

        ipcMain.handle(`electronbb_call`, async (e, funcID, args) => {
            const func = this.functions.get(funcID);
            if (func) return this.CreateExportObject(await func(...args));
        });

        ipcMain.on("electronbb_callSync", (e, funcID, args) => {
            const func = this.functions.get(funcID);
            if (func) e.returnValue = this.CreateExportObject(func(...args));
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
        // checks for (hopefully) every type
        // if bigint, convert to string
        // if function, create "reference"
        // if number, check for NaN, if NaN, pass as type
        // if object, do magic
        // if symbol throw
        // if undefined pass as type

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
                throw new Error("Objects other than array or plain object (or null) are not supported");
            }
            case "string": {
                return {
                    type: "string",
                    value: object,
                };
            }
            case "symbol": {
                throw new Error("Symbols are not supported!");
            }
            case "undefined": {
                return {
                    type: "undefined",
                    value: null,
                };
            }
        }
        throw new Error("How tf did you do that?");
    }

    /**
     * Exports an object to renderer process
     *
     * @param {String} object
     * @param {any} object
     */
    Export(name, object) {
        const existingObject = this.exports.get(name);
        if (existingObject) this.purgeObject(existingObject);

        const exportObject = this.CreateExportObject(object);
        this.exports.set(name, exportObject);
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
     * Deletes exported object from main, also unregisters function handlers
     *
     * @param {String} name
     */
    Delete(name) {
        if (!this.exports.has(name)) return;
        this.purgeObject(this.exports.get(name));
        this.exports.delete(name);
    }

    /**
     * @private
     * @type {Map<string, Function>}
     */
    functions = null;

    /**
     * @private
     * @type {Map<string, string>}
     */
    exports = null;
}

module.exports = MainBridge;
