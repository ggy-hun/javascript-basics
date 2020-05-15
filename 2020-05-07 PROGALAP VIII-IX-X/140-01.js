const readLine = require('readline-sync');

const a = readLine.questionInt('Type in the first element of your series: ');
const b = readLine.questionInt('Type in the difference of your elements: ');
const c = readLine.questionInt('Type in the number of elements you want to get: ');

// const series1 = (a, b, c) => {
//   while (c > 0) {
//     console.log(a);
//     a += b,
//     c--;
//   }
// };

// console.log(series1(a, b, c));

const series1 = (a, b, c) => {
  for (let i = 0; i < c; i++) {
    process.stdout.write(`${a}, `);
    a += b;
  }
};

series1(a, b, c);
