const { ipcRenderer } = require("electron");

/**
 * @typedef {Object}
 * @property {String} bridgeID
 * @property {import("../main").ExportObject} object
 */

/**
 * Converts exported object to regular object, that can be used
 *
 * @param {import("../main").ExportObject} object
 */
const MakeRegularObject = (object) => {
    switch (object.type) {
        case "array": {
            let out = [];

            object.value.forEach((e) => {
                out.push(MakeRegularObject(e));
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
            return (...args) => {
                const funcID = object.value;
                return MakeRegularObject(JSON.parse(ipcRenderer.sendSync(`electronbb_callSync`, funcID, args))); // TODO: Convert args
            };
        }
        case "async_function": {
            return async (...args) => {
                const funcID = object.value;
                return MakeRegularObject(JSON.parse(await ipcRenderer.invoke(`electronbb_call`, funcID, args))); // TODO: Convert args
            };
        }
        case "nan": {
            return NaN;
        }
        case "object": {
            let out = {};

            Object.entries(object.value).forEach((e) => {
                out[e[0]] = MakeRegularObject(e[1]);
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
};

/**
 * Gets exported object with specified name
 *
 * @param {String} name
 * @returns {Promise<any>}
 */
const Get = async (name) => {
    const obj = await ipcRenderer.invoke("electronbb_get", name);
    if (!obj) throw new Error("Failed to find specified object");
    return MakeRegularObject(JSON.parse(obj));
};

/**
 * Gets exported object with specified name
 *
 * @param {String} name
 * @returns {any}
 */
const GetSync = (name) => {
    const obj = ipcRenderer.sendSync("electronbb_getSync", name);
    if (!obj) throw new Error("Failed to find specified object");
    return MakeRegularObject(JSON.parse(obj));
};

module.exports = {
    Get,
    GetSync,
};
