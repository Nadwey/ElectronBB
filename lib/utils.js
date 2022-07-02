const IsObjectSupported = (object) => {
    const supportedTypes = ["Date", "ArrayBuffer", "Map", "Set", "Error"];
    if (!object) return false;
    if (supportedTypes.includes(object.constructor.name)) return true;
    return false;
};

module.exports = {
    IsObjectSupported,
};
