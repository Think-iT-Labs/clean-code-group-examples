/*
  Copyright (C) 2006 by Project GetRich Inc. All Rights Reserved
 Code was copied from StackOverflow https://stackoverflow.com/a/40200710
*/

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
