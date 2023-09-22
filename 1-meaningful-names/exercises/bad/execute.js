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

module.exports = { execute1 };
