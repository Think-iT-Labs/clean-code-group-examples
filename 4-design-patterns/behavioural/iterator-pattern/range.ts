// Learn about Iterables in JS here https://javascript.info/iterable#symbol-iterator
// Gotten from this Fireship.io video https://www.youtube.com/watch?v=tv-_1er1mWI

function range(start: number, end: number, step = 1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start + step < end) {
        start = start + step;
        return { value: start, done: false };
      }
      return { done: true, value: start };
    },
  };
}

for (const n of range(4, 60, 8)) {
  console.log(n, "<---n");
}
