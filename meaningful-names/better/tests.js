const {inArray2} = require('./in-array-2')
const {inArray1} = require('./in-array-1')

console.log(inArray2(["a", "b", "c"], "a"));
//=> true

console.log(inArray2(null, "a"));
//=> false

console.log(inArray2(null));


console.log(inArray1(["a", "b", "c"], "a"));
//=> true

console.log(inArray1(null, "a"));
//=> false

console.log(inArray1(null));
