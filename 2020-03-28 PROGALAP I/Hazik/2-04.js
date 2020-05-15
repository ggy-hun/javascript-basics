const x = Math.round(Math.random() * 100 - 50);
const y = Math.round(Math.random() * 100 - 50);
const z = Math.round(Math.random() * 100 - 50);
console.log('x = ' + x);
console.log('y = ' + y);
console.log('z = ' + z);
const sum = [x,y,z].sort((x,y) => x-y).reverse((x,y) => x-y);
console.log('A számok csökkenő sorrendben: ' + sum);