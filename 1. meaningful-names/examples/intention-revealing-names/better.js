function isPerfectPower(value) {
  if (value == 1) return [1, 1];
  let power = 2;

  while (Math.floor(value ** (1 / power)) > 1) {
    let base = value ** (1 / power);
    base = +base.toFixed(5);
    if (Number.isInteger(base)) {
      return [base, power];
    }
    power++;
  }

  return null;
}
