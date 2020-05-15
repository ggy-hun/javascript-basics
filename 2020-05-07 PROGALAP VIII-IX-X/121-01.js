// importálunk
const table = require('table');

// 117-01.js
const generate2dArray = (n, m) => {
  const arr = new Array(n); // Sorok létrehozása
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m); // minden sorhoz m oszlop rendelése
  }
  return arr;
};

// 119-01.js
const print2dArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j] + (j < arr[i].length - 1 ? ', ' : '\r\n'));
    }
  }
};

// 121-01
const fill2dArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.round(Math.random() * 9 + 1);
    }
  }
};

const arr = generate2dArray(3, 3); // tömb létrehozása
fill2dArray(arr); // feltöltés random számokkal
// print2dArray(arr); // kiíratás

console.log(table.table(arr));

// 121-02
const sum2dArray = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  console.log('Sum of 2D array: ', sum);
};

sum2dArray(arr);

// 121-03
const max2dArray = (arr) => {
  let max = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
  }
  console.log('Max of 2D array: ', max);
};

max2dArray(arr);

// 121-04
