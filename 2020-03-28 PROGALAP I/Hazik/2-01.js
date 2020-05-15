const x = Math.round(Math.random() * 9 + 1)
const y = Math.round(Math.random() * 9 + 1)
console.log('x = ' + x);
console.log('y = ' + y);

if (x > y) {
    console.log('x a nagyobb!');
} else if (x < y) {
    console.log('y a nagyobb!');
} else {
    console.log('x és y egyenlőek!');
}