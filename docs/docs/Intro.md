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
let mainBridge = new MainBridge();

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    win.loadFile(path.join(__dirname, "index.html"));

    mainBridge.export("exported", {
        a: "b",
        c: 0xd,
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
const RendererBridge = require("electronbb/lib/renderer");
let rendererBridge = new RendererBridge();

async function getThings() {
    const exported = await rendererBridge.Get("exported"); // name same as in export

    console.log(exported.a); // b
}

getThings();
```

You can also do it synchronously:

```js showLineNumbers
const RendererBridge = require("electronbb/lib/renderer");
let rendererBridge = new RendererBridge();

function getThings() {
    const exported = rendererBridge.GetSync("exported"); // name same as in export

    console.log(exported.a); // b
}

getThings();
```
