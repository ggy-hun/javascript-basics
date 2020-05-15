let x = Math.round(Math.random() * 5 + 5);     //5-10
let y = Math.round(Math.random() * 3 + 1);     //1-4
let z = Math.round(Math.random() * 3 + 10);    //10-13
let dif = z - y;                               //különbség
console.log('x = ' + x);
console.log('y = ' + y);
console.log('z = ' + z);
while (x > 0) {
    console.log(Math.round(Math.random() * dif + y));
    x = x - 1;
}