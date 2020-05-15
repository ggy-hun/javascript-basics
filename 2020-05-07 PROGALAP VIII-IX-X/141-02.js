const countSomeNumbers = (arr) => {
  let count = 0;
  for (const element of arr) {
    if (element % 2 === 0 && element % 3 === 0) {
      count++;
    }
  }
  return count;
};

console.log(countSomeNumbers([1, 3, 6, 12, 4, 2]));
