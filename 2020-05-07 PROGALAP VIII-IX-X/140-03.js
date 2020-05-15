const readLine = require('readline-sync');

const a = readLine.questionFloat('Type in the a-side of your triangle: ');
const b = readLine.questionFloat('Type in the b-side of your triangle: ');
const c = readLine.questionFloat('Type in the c-side of your triangle: ');

const isTriangle = (a, b, c) => {
  if (a < b + c && b < a + c && c < a + b) {
    return true;
  } else {
    return false;
  }
};

console.log(isTriangle(a, b, c));
