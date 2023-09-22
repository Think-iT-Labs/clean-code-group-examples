function expressNumberInIndexForm(num) {
  if (num == 1) return [1, 1];
  let index = 2;

  while (Math.floor(num ** (1 / index)) > 1) {
    let base = num ** (1 / index);
    base = +base.toFixed(5);
    if (Number.isInteger(base)) {
      return [base, index];
    }
    index++;
  }

  return null;
}

console.log(expressNumberInIndexForm(8));
console.log(expressNumberInIndexForm(16));
