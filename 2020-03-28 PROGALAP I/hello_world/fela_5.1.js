const x = Math.round(Math.random() * 9 + 1);
const y = Math.round(Math.random() * 9 + 1);
console.log('x = ' + x);
console.log('y = ' + y);

if (x > y) {
    console.log(x + ', azaz x a nagyobb szám!');
} else if (x < y) {
    console.log(y + ', azaz y a nagyobb szám!');
} else {
    console.log('x és y egyenlő!');
}