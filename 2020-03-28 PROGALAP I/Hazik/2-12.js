let count = Math.round(Math.random() * 9) + 1;
let element = 5;
console.log('Generált számok: ' + count);
while (count > 0) {
    console.log(element);
    element += 5;
    count --;
}