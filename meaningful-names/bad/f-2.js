function execute2(l, v) {
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

module.exports = { execute2 };
