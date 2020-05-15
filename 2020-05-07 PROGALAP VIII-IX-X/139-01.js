const readLine = require('readline-sync');

const arr = [-5, -3, -2, 0, 0, 0, 1, 2, 3, 4, 5];
console.log('The array of our elements: ', arr);

const avgArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log('The average of the array is: ', Math.round(sum / arr.length));
};

avgArray(arr);

// const negCount = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       break;
//     } else {
//       sum += arr[i];
//     }
//   }
//   console.log('The sum of negative numbers in the array is: ', sum);
// };

const negCount = (arr) => {
  let neg = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      neg++;
    }
  }
  console.log('The count of negative numbers in the array is: ', neg);
};

negCount(arr);

const posMinNegMax = (arr) => {
  let max = Number.NEGATIVE_INFINITY;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (arr[i] > max) {
        max = arr[i];
      }
    } else {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  console.log({
    negMax: max,
    posMin: min
  });
};

posMinNegMax(arr);

// const zeroCounter = (arr) => {
//   let zeroCount = 0;
//   for (const element of arr) {
//     if (element === 0) {
//       zeroCount++;
//     }
//   }
//   console.log('The number of 0-s in the array: ', zeroCount);
// };

// zeroCounter(arr);

const num = readLine.questionInt('Type a number: ');

const zeroCounter = (num) => {
  const numString = num + '';
  let zeroCount = 0;
  for (const element of numString) {
    if (element === '0') {
      zeroCount++;
    }
  }
  console.log('The number of 0-s in your number is: ', zeroCount);
};

zeroCounter(num);

const a = readLine.questionInt('A: ');
const b = readLine.questionInt('B: ');

const aToB = (a, b) => {
  if (a < b) {
    for (let i = a; i <= b; i++) {
      process.stdout.write(i + ', ');
    }
  } else {
    for (let i = a; i >= b; i--) {
      process.stdout.write(i + ', ');
    }
  }
};

aToB(a, b);
