let x = Math.round(Math.random() * 2 + 1);
let y = Math.round(Math.random() * 5 + 5);
console.log('x = ' + x);
console.log('y = ' + y);

console.log(x);
while ((y - x) > 0) {
    if ((y - x) > 0) {
        console.log(x + 1);
        x = x + 1;
    } else {
        break;
    }
}