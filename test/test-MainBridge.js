const MainBridge = require("../lib/main");

module.exports = (webContents) => {
    const mainBridge = new MainBridge(webContents);

    mainBridge.Export("testObject1", {
        testBigInt: 42n,
        testBooleanTrue: true,
        testNumber: 1234,
        testNaN: NaN,
        testString: "abcd",
        testUndefined: undefined,
        testNull: null,

        testNestedObject: {
            a: "b"
        },
        testArray: [0, 1, 2, 3, "abc"],

        testAsyncFunction: async() => {
            return "abcd";
        }
    });

    mainBridge.Export("testUtils", {
        print: (str) => {
            console.log(str);
        },
        printError: (str) => {
            console.error(str);
        },
        end: (success) => {
            process.exit(success ? 0 : 1);
        }
    });
};
