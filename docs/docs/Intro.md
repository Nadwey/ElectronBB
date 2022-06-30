---
sidebar_position: 1
title: "Intro"
---

JSDoc sucks ngl.

## Exporting an object from main

```js showLineNumbers
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const MainBridge = require("electronbb/lib/main");

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    win.loadFile(path.join(__dirname, "index.html"));
    let mainBridge = new MainBridge();

    mainBridge.export("exported", {
        a: "b",
        c: 0xD
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
```

## Importing an object in renderer

```js showLineNumbers
const electronbb = require("electronbb/lib/renderer");

async function getThings() {
    const exported = await electronbb.Get("exported"); // name same as in export

    console.log(exported.a); // b
}

getThings();
```