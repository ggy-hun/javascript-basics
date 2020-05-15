// let i = 0;
// while (i < 10) {
//     console.log('Cica', i);
//     i++;
// }

// i = i + 5;
// i += 5;

// let j = 1;
// while (j <= 20) {
//     if (j % 2 === 0) {
//         console.log('páros', j);
//     } else {
//         console.log('páratlan', j);
//     }
//     j++;
// }

let count = Math.round(Math.random() * 9) + 1;
let element = 5;
while (count > 0) {
    console.log(element);
    element += 5;
    count --;
}