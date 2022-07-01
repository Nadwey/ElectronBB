---
title: "Renderer"
slug: "./"
---

To get objects from main, you need to use functions that are stored in `lib/renderer` so, for example:

```js showLineNumbers
const electronbb = require("electronbb/lib/renderer");
```

## Get

Gets an exported object from main.

### Arguments

| Name | Type   | Description                |
| ---- | ------ | -------------------------- |
| name | String | Name of the object to get. |

### Returns

Your object.

### Example

See [Intro#Importing an object in renderer](../../Intro#importing-an-object-in-renderer)

## GetSync

Same as Get, but it's sync.

### Arguments

| Name | Type   | Description                |
| ---- | ------ | -------------------------- |
| name | String | Name of the object to get. |

### Returns

Your object.

### Example

See [Intro#Importing an object in renderer](../../Intro#importing-an-object-in-renderer)
