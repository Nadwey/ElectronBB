const is = require("electron-is");

if (is.renderer()) {
    module.exports = { RendererBridge: require("./lib/renderer") };
} else {
    module.exports = { MainBridge: require("./lib/main") };
}
