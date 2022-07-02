module.exports = (mainBridge) => {
    mainBridge.Export("testObject1", {
        testBigInt: 42n,
        testBooleanTrue: true,
        testNumber: 1234,
        testNaN: NaN,
        testString: "abcd",
        testUndefined: undefined,
        testNull: null,

        testNestedObject: {
            a: "b",
        },
        testArray: [0, 1, 2, 3, "abc"],

        testAsyncFunction: async () => {
            return "abcd";
        },

        testDate: new Date(),
        testArrayBuffer: new ArrayBuffer(10),
        testMap: new Map(),
        testSet: new Set(),
        testError: new Error(),
    });

    mainBridge.Export("testUtils", {
        print: (str) => {
            console.log(str);
        },
        printError: (str) => {
            console.error(str);
        },
    });
};
