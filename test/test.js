const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { MainBridge } = require("../index");
const testMainBridge = require("./test-MainBridge");
const testRendererBridge = require("./test-RendererBridge");

let success = true;

console.log(`Using node ${process.versions.node}`);
console.log(`Using electron ${process.versions.electron}`);

/**
 * @param {*} actual
 * @param {*} expected
 * @param {String} name
 */
 function check(actual, expected, name) {
    if (actual === expected) {
        console.log(`passed - ${name}`);
        return;
    }
    console.error(`FAILED - ${name}`);
    success = false;
}

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
    if(!(await testRendererBridge(win, mainBridge))) success = false;
    
    console.log("--- other ---");
    check(MainBridge.GetInstance(), mainBridge, "MainBridge.GetInstance");

    process.exit(success ? 0 : 1);
}

app.whenReady().then(() => {
    createWindow();
});
