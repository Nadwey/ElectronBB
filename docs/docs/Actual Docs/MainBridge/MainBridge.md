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

### Arguments

| Name   | Type                                     | Description                 |
| ------ | ---------------------------------------- | --------------------------- |
| name   | string                                   | Name of the exported object |
| object | See [Supported Types](../SupportedTypes) | Object to export            |

### Example

```js showLineNumbers
const MainBridge = require("electronbb/lib/main");
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
const electronbb = require("electronbb/lib/renderer");

async function PrintString() {
    const object = await electronbb.Get("testObject");
    console.log(object.exportedString);
}

PrintString(); // abcd
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
const MainBridge = require("electronbb/lib/main");
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
const electronbb = require("electronbb/lib/renderer");

async function getThings() {
    const truth = await electronbb.Get("truth"); // name same as in export

    console.log(truth.rustSuperiorToCpp); // false
}

getThings();
```
