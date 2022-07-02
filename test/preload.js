const { RendererBridge } = require("../index");
let testUtils = null;
let success = true;
let rendererBridge = new RendererBridge();

/**
 * Mini testing library shall we say
 *
 * @param {*} actual
 * @param {*} expected
 * @param {String} name
 */
function check(actual, expected, name) {
    if (actual === expected) {
        testUtils.print(`passed - ${name}`);
        return;
    }
    testUtils.printError(`FAILED - ${name}`);
    success = false;
}

async function testObject1(testObject) {
    // bigint
    check(testObject.testBigInt, 42n, "BigInt export");

    // boolean
    check(testObject.testBooleanTrue, true, "Boolean export");

    // number
    check(testObject.testNumber, 1234, "Number export");

    // NaN
    check(Number.isNaN(testObject.testNaN), true, "NaN export");

    // string
    check(testObject.testString, "abcd", "NaN export");

    // undefined
    check("testUndefined" in testObject, true, "Undefined exists");
    check(testObject.testUndefined, undefined, "Undefined export");

    // null
    check(testObject.testNull, null, "Null export");

    // nested object
    check(testObject.testNestedObject.a, "b", "Nested object export");

    // array
    check(testObject.testArray.join(""), "0123abc", "Array export");

    // async function
    check(await testObject.testAsyncFunction(), "abcd", "Async function export - test 1");
    check("then" in testObject.testAsyncFunction(), true, "Async function export - test 2"); // checks if promise

    // date
    check(testObject.testDate instanceof Date, true, "Date export");

    // arraybuffer
    check(testObject.testArrayBuffer instanceof ArrayBuffer, true, "ArrayBuffer export");

    // map
    check(testObject.testMap instanceof Map, true, "Map export");

    // set
    check(testObject.testSet instanceof Set, true, "Set export");

    // error
    check(testObject.testError instanceof Error, true, "Error export");
}

async function preTest() {
    testUtils = rendererBridge.GetSync("testUtils");

    testUtils.print(`--- Exported from main - Get ---`);
    await testObject1(await rendererBridge.Get("testObject1"));

    testUtils.print(`--- Exported from main - GetSync ---`);
    await testObject1(rendererBridge.GetSync("testObject1"));

    testUtils.print("Also, if you see this message in the console, it works");
}

rendererBridge.Export("test", {
    testBigInt: 42n,
    testBooleanTrue: true,
    testBooleanFalse: false,
    testNumber: 1234,
    testNaN: NaN,
    testString: "abcd",
    testUndefined: undefined,
    testNull: null,

    testNestedObject: {
        a: "b",
    },
    testArray: [0, 1, 2, 3, "abc"],

    test: async () => {
        await preTest();
        return success;
    },

    testSyncFunction: async () => {
        return "abcd";
    },

    testDate: new Date(),
    testArrayBuffer: new ArrayBuffer(10),
    testMap: new Map(),
    testSet: new Set(),
    testError: new Error(),
});
