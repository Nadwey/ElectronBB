let success = true;

/**
 * @param {*} actual
 * @param {*} expected
 * @param {String} name
 */
function check(actual, expected, name) {
    if (actual === expected) {
        console.log(`passed - ${name}`);
        return;
    }
    console.error(`FAILED - ${name}`);
    success = false;
}

module.exports = async (window, mainBridge) => {
    console.log("--- Exported from renderer ---");
    let testObject = await mainBridge.Get(window, "test");

    // bigint
    check(testObject.testBigInt, 42n, "BigInt export");

    // boolean
    check(testObject.testBooleanTrue, true, "Boolean export - test 1");
    check(testObject.testBooleanFalse, false, "Boolean export - test 2");
    check(typeof testObject.testBooleanFalse === "boolean", true, "Boolean export - test 3");

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

    // sync function
    check(await testObject.testSyncFunction(), "abcd", "Sync function export - test 1");
    check("then" in testObject.testSyncFunction(), true, "Sync function export - test 2"); // checks if promise

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

    const successRenderer = await testObject.test();
    if (typeof successRenderer !== "boolean" || !successRenderer) success = false;

    process.exit(success ? 0 : 1);
};
