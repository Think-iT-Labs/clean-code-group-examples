const { execute1 } = require("./execute");

console.log(execute1(["a", "b", "c"], "a"));
//=> true

console.log(execute1(null, "a"));
//=> false

console.log(execute1(null));
