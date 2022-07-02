---
title: "Supported types"
---

:::note

Notes don't affect your exported objects, I wrote them only because types only looked kinda empty.

:::

| Type        | Notes                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------- |
| BigInt      | Serializes to string, then gets converted back to BigInt                                  |
| Boolean     | -                                                                                         |
| Function    | Passed by generated ID (when exporting from renderer function will be converted to async) |
| Number      | NaNs are also supported                                                                   |
| String      | -                                                                                         |
| Undefined   | Passed as type                                                                            |
| Null        | Passed as type                                                                            |
| Date        | -                                                                                         |
| ArrayBuffer | -                                                                                         |
| Map         | -                                                                                         |
| Set         | -                                                                                         |
| Error       | -                                                                                         |

All of the above types can be passed in `array` or `plain object`.
