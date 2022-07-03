---
title: "MainBridge"
slug: ./
---

MainBridge class allows you to export objects to renderer.

:::warning

There should be only one MainBridge class instance in whole application!

:::

## MainBridge.constructor()

Creates MainBridge instance.

## MainBridge.Export(name, object)

Exports specified object to renderer.

### Arguments

| Name   | Type                                     | Description                 |
| ------ | ---------------------------------------- | --------------------------- |
| name   | string                                   | Name of the exported object |
| object | See [Supported Types](../SupportedTypes) | Object to export            |

### Example

```js showLineNumbers
const { MainBridge } = require("electronbb");
let mainBridge = new MainBridge();

mainBridge.Export("testObject", {
    exportedNumber: 1234,
    exportedString: "abcd",
    exportedFunction: () => {
        console.log("Omg I can export functions!");
    },
});
```

You can access the object later from renderer

```js showLineNumbers
const { RendererBridge } = require("electronbb");
let rendererBridge = new RendererBridge();

const object = rendererBridge.GetSync("testObject");
console.log(object.exportedString); // abcd
```

## MainBridge.Delete(name)

Deletes speficied exported object **only from main process**.

### Arguments

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | String | -           |

### Example

In main process:

```js showLineNumbers
const { MainBridge } = require("electronbb");
let mainBridge = new MainBridge();

// let's export an object
mainBridge.Export("truth", {
    rustSuperiorToCpp: true,
});

// oh, wait actually no
mainBridge.Delete("truth");

//there you go
mainBridge.Export("truth", {
    rustSuperiorToCpp: false, // I still probably will have to learn it, like I tried learning Rust like 3 fcking times and it's just so hard, someone plz help me
});
```

In renderer process:

```js showLineNumbers
const { RendererBridge } = require("electronbb");
let rendererBridge = new RendererBridge();

const truth = rendererBridge.GetSync("truth"); // name same as in export
console.log(truth.rustSuperiorToCpp); // false
```

## async MainBridge.Get(window, name)

Gets object exported from renderer.

### Arguments

| Name   | Type                                                                       | Description               |
| ------ | -------------------------------------------------------------------------- | ------------------------- |
| window | [BrowserWindow](https://www.electronjs.org/docs/latest/api/browser-window) | Window to get object from |
| name   | string                                                                     | Name of the object to get |

### Returns

Your object.

### Remarks

:::caution

All functions exported will be converted to async functions due to Electron's limitations.

:::

### Example

See [Intro#importing-an-object-from-renderer-in-main](../../Intro#importing-an-object-from-renderer-in-main)

## static MainBridge.GetInstance()

### Returns

Instance of MainBridge.  
If none initialized, returns `null`;

### Remarks

This will only return the latest initialized instance of MainBridge.

### Example

```js
const { MainBridge } = require("electronbb");
let mainBridge = new MainBridge();

console.log(mainBridge === MainBridge.GetInstance()); // true
```

