const electronbb = require("../lib/renderer");
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

async function test() {
    const testObject1 = await electronbb.Get("testObject1");

    // bigint
    check(testObject1.testBigInt, 42n, "BigInt export");

    // boolean
    check(testObject1.testBooleanTrue, true, "Boolean export");

    // number
    check(testObject1.testNumber, 1234, "Number export");

    // NaN
    check(Number.isNaN(testObject1.testNaN), true, "NaN export");

    // string
    check(testObject1.testString, "abcd", "NaN export");

    // undefined
    check("testUndefined" in testObject1, true, "Undefined exists");
    check(testObject1.testUndefined, undefined, "Undefined export");

    // null
    check(testObject1.testNull, null, "Null export");

    // nested object
    check(testObject1.testNestedObject.a, "b", "Nested object export");

    // array
    check(testObject1.testArray.join(""), "0123abc", "Array export");

    check(await testObject1.testAsyncFunction(), "abcd", "Async function export - test 1");
    check("then" in testObject1.testAsyncFunction(), true, "Async function export - test 2"); // checks if promise

    testUtils.print("Also, if you see this message in the console, it works");
    testUtils.end(success);
}

async function preTest() {
    testUtils = await electronbb.Get("testUtils");
    
    test();
}

preTest();