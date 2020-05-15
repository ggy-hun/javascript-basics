// Paraméterátadás

const increment = (num) => { // érték szerinti paraméterátadás
  num++;
  console.log(num);
};

const myNum = 5;
increment(myNum);
console.log('Original after method', myNum);

const addNumberToArray = (arr) => { // referencia szerinti paraméterátadás
  arr.push(Math.round(Math.random() * 10));
  console.log('Inside before reassign', arr);
  arr = ['10', '20']; // így már új értéket kap a tömb, és nem érvényes a paraméterátadás
  console.log('Inside after reassign', arr);
};

const myArr = [];
addNumberToArray(myArr);
console.log('After', myArr);
