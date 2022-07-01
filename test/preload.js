const RendererBridge = require("../lib/renderer");
let testUtils = null;
let success = true;

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

    check(await testObject.testAsyncFunction(), "abcd", "Async function export - test 1");
    check("then" in testObject.testAsyncFunction(), true, "Async function export - test 2"); // checks if promise
}

async function preTest() {
    let rendererBridge = new RendererBridge();

    testUtils = rendererBridge.GetSync("testUtils");
    
    testUtils.print(`--- Get ---`);
    await testObject1(await rendererBridge.Get("testObject1"));

    testUtils.print(`--- GetSync ---`);
    await testObject1(rendererBridge.GetSync("testObject1"));

    testUtils.print("Also, if you see this message in the console, it works");
    testUtils.end(success);
}

preTest();