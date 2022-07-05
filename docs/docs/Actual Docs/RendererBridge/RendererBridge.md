---
title: "RendererBridge"
slug: "./"
---

RendererBridge class allows you to import objects from main.

## RendererBridge.constructor()

Creates new RendererBridge instance.

## async RendererBridge.Get(name)

Gets an exported object from main.

### Arguments

| Name | Type   | Description                |
| ---- | ------ | -------------------------- |
| name | String | Name of the object to get. |

### Returns

Your object.

### Remarks

Sync functions will have `callIgnore` property which will call them without freezing renderer process and ignore return value.

### Example

See [Intro#importing an object from main in renderer](../../Intro#importing-an-object-from-main-in-renderer)

## RendererBridge.GetSync(name)

Same as Get, but it's sync.

### Arguments

| Name | Type   | Description                |
| ---- | ------ | -------------------------- |
| name | String | Name of the object to get. |

### Returns

Your object.

### Remarks

Sync functions will have `callIgnore` property which will call them without freezing renderer process and ignore return value.

### Example

See [Intro#importing an object from main in renderer](../../Intro#importing-an-object-from-main-in-renderer)

## RendererBridge.Export(name, object)

Exports specified object to main.

### Arguments

| Name   | Type                                     | Description                  |
| ------ | ---------------------------------------- | ---------------------------- |
| name   | string                                   | Name of the object to export |
| object | See [Supported Types](../SupportedTypes) | Object to export             |

### Remarks

:::caution

All functions exported will be converted to async functions due to Electron's limitations.

:::

### Example

See [Intro#Exporting an object from renderer to main](../../Intro#exporting-an-object-from-renderer-to-main)
