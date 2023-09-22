const { execute1 } = require("./f-1");
const { execute2 } = require("./f-2");

console.log(execute1(["a", "b", "c"], "a"));
//=> true

console.log(execute1(null, "a"));
//=> false

console.log(execute1(null));

console.log(execute2(["a", "b", "c"], "a"));
//=> true

console.log(execute2(null, "a"));
//=> false

console.log(execute2(null));
