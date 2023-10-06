const { execute1, findItemInArray } = require("./execute");

console.log(execute1(["a", "b", "c"], "a"));
//=> true

console.log(execute1(["a", 7, "b", "c"], 7));
//=> true

console.log(execute1(null, "a"));
//=> false

console.log(execute1(null));

console.log(findItemInArray(["a", "b", "c"], "a"));
//=> true

console.log(findItemInArray(["a", 7, "b", "c"], 7));
//=> true

console.log(findItemInArray(null, "a"));
//=> false

console.log(findItemInArray(null));
