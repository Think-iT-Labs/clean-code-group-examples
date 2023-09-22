function execute1(things, v) {
  things = Object.prototype.toString.call(things) === "[object Array]" ? things : [];

  var i = -1;
  var l = things.length;

  while (++i < l) {
    if (things[i] === v) return true;
  }

  return false;
}

module.exports = { execute1 };
