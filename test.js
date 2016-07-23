var assert   = require('assert')
var currying = require('./index')

var testFunc = (a1, a2, a3, a4) => a1 + a2 + a3 + a4;

var curryingTestFunc = currying(testFunc);

assert.equal(curryingTestFunc(1)(2)(3)(4), testFunc(1, 2, 3, 4));
assert.equal(curryingTestFunc(1, 2)(3)(4), testFunc(1, 2, 3, 4));
assert.equal(curryingTestFunc(1)(2, 3)(4), testFunc(1, 2, 3, 4));
assert.equal(curryingTestFunc(1)(2)(3, 4), testFunc(1, 2, 3, 4));
assert.equal(curryingTestFunc(1, 2, 3)(4), testFunc(1, 2, 3, 4));
assert.equal(curryingTestFunc(1)(2, 3, 4), testFunc(1, 2, 3, 4));
assert.equal(curryingTestFunc(1, 2, 3, 4), testFunc(1, 2, 3, 4));

var curryingTestFunc_2_3 = curryingTestFunc(2, 3);

assert.equal(curryingTestFunc_2_3(4)(5), testFunc(2, 3, 4, 5));
assert.equal(curryingTestFunc_2_3(5)(6), testFunc(2, 3, 5, 6));
assert.equal(curryingTestFunc_2_3(8, 9), testFunc(2, 3, 8, 9));

var curryingCurryingTestFunc_2_3 = currying(curryingTestFunc(2, 3));

assert.equal(curryingCurryingTestFunc_2_3(4)(5), testFunc(2, 3, 4, 5));
assert.equal(curryingCurryingTestFunc_2_3(5)(6), testFunc(2, 3, 5, 6));
assert.equal(curryingCurryingTestFunc_2_3(8, 9), testFunc(2, 3, 8, 9));
