function execute1(l, v) {
  l = l || [];
  const len = l.length;
  let i;

  for (i = 0; i < len; i++) {
    if (l[i] === v) {
      return true;
    }
  }
  return false;
}

function findItemInArray(array, value) {
  if (!array) return false;
  return !!array.find((item) => item === value);
}

module.exports = { execute1, findItemInArray };
