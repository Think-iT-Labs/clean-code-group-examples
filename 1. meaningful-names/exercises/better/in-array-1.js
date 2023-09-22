//Code inspired by https://github.com/wilmoore/inarray.js/blob/master/index.js

function inArray1(list, item) {
  list = Object.prototype.toString.call(list) === "[object Array]" ? list : [];

  var idx = -1;
  var end = list.length;

  while (++idx < end) {
    if (list[idx] === item) return true;
  }

  return false;
}

module.exports = { inArray1 };
