let x = Math.round(Math.random() * 2 + 1);
let y = Math.round(Math.random() * 5 + 5);
console.log('x = ' + x);
console.log('y = ' + y);

while ((y - x) > 1) {
    if ((y - x) > 1) {
        console.log(x + 1);
        x = x + 1;
    } else {
        break;
    }
}

// for(let i = x + 1; i < y; i++) {
//     process.stdout.write(i + ', ');
// }
// console.log();