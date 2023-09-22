function isPP(n) {
  if (n == 1) return [1, 1];
  let c = 2;

  while (Math.floor(n ** (1 / c)) > 1) {
    let temp = n ** (1 / c);
    temp = +temp.toFixed(5);
    if (Number.isInteger(temp)) {
      return [temp, c];
    }
    c++;
  }

  return null;
}
