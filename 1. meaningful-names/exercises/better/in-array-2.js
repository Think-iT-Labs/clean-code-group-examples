// Code inspired by: https://github.com/jonschlinkert/in-array/blob/master/index.js
function inArray2(arr, val) {
  arr = arr || [];
  var len = arr.length;
  var i;

  for (i = 0; i < len; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}

module.exports = {inArray2}