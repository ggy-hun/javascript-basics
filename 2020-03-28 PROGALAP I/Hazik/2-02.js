const x = Math.round(Math.random() * 99 + 1);
const y = Math.round(Math.random() * 99 + 1);
console.log('x = ' + x);
console.log('y = ' + y);
if (x % y === 0) {
    console.log('x osztható y-al');
} else {
    console.log('x nem osztható y-al');
}