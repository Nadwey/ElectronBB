const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const testMainBridge = require("./test-MainBridge");

console.log(`Using node ${process.versions.node}`);
console.log(`Using node ${process.versions.electron}`);

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    win.loadFile(path.join(__dirname, "index.html"));
    testMainBridge(win.webContents);
}

app.whenReady().then(() => {
    createWindow();
});
