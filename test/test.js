const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { MainBridge } = require("../index");
const testMainBridge = require("./test-MainBridge");
const testRendererBridge = require("./test-RendererBridge");

console.log(`Using node ${process.versions.node}`);
console.log(`Using electron ${process.versions.electron}`);

async function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            sandbox: false,
        },
    });
    const mainBridge = new MainBridge();
    testMainBridge(mainBridge);
    await win.loadFile(path.join(__dirname, "index.html"));
    testRendererBridge(win, mainBridge);
}

app.whenReady().then(() => {
    createWindow();
});
