const { ipcRenderer } = require("electron");
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
        testUtils.print(`${name} passed!`);
        return;
    }
    testUtils.print(`${name} failed!`);
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

    testUtils.print("Also, if you see this message in the console, it works");
    testUtils.end(success);
}

async function preTest() {
    testUtils = await electronbb.Get("testUtils");
    
    test();
}

preTest();