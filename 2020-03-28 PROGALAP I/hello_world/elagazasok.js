const num = Math.round(Math.random() * 21) - 10;
console.log(num);
if (num > 0) {
  console.log('Pozitív szám');
} else if (num === 0) {
  console.log('Nullaaaa');
} else {
  console.log('Negatív szám');
}

if (num > 0 && num % 2 === 0) {
  console.log('Pozitív páros.');
}

if (num % 2 === 0 || num < 2) {
  console.log('Cica');
}
