---
sidebar_position: 1
title: "Intro"
---

JSDoc sucks ngl.

## Exporting an object from main to renderer

```js showLineNumbers
const { app, BrowserWindow } = require("electron");
const path = require("path");
const { MainBridge } = require("electronbb");
let mainBridge = new MainBridge();

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    mainBridge.export("exported", {
        a: "b",
        c: 0xd,
    });

    win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(() => {
    createWindow();
});
```

## Importing an object from main in renderer

```js showLineNumbers
const { RendererBridge } = require("electronbb");
let rendererBridge = new RendererBridge();

async function getThings() {
    const exported = await rendererBridge.Get("exported"); // name same as in export

    console.log(exported.a); // b
}

getThings();
```

You can also do it synchronously:

```js showLineNumbers
const { RendererBridge } = require("electronbb");
let rendererBridge = new RendererBridge();

function getThings() {
    const exported = rendererBridge.GetSync("exported"); // name same as in export

    console.log(exported.a); // b
}

getThings();
```

## Exporting an object from renderer to main

```js
const { RendererBridge } = require("electronbb");
let rendererBridge = new RendererBridge();

rendererBridge.Export("yourObject", {
    message: "Hello Main",
});
```

## Importing an object from renderer in main

```js
const { app, BrowserWindow } = require("electron");
const path = require("path");
const { MainBridge } = require("electronbb");

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
    await win.loadFile(path.join(__dirname, "index.html"));
    const object = await mainBridge.Get("yourObject");

    console.log(object.message); // Hello Main
}

app.whenReady().then(() => {
    createWindow();
});
```
