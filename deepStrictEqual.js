// Preferred way of comparing objects
// assuming you have Node.js package installed


// Importing the util module
const util = require('util');

// Comparing string with integer
console.log("1. ", util
.isDeepStrictEqual({ a: 1 }, { a: '1' }));

// Comparing two NaN values
console.log("2. ", util.isDeepStrictEqual(NaN, NaN));

// Comparing two undefined values
console.log("3. ", util
.isDeepStrictEqual(undefined, undefined));

// Importing isDeepStrictEqual instead of whole util
const { isDeepStrictEqual } = require('util');

// Comparing two same unwrapped objects
console.log("4. ", isDeepStrictEqual(
Object('Roma'), Object('Roma')));

// Comparing objects with different order of keys
console.log("5. ", util
.isDeepStrictEqual({ a: 1, b:5 }, { b: 5, a: 1 }));

// to check it just run in terminal
// node deepStrictEqual.js