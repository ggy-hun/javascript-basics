
const arr2 = [5, 10, 15, 24, 100];

// const twoDigitsThree = (a) => {
//     for (let i = 0; i < arr2.length; i++) {
//         if (a[i] > 9) {
//             if (a[i] % 3 === 0) {
//                 console.log(a[i]);
//             }
//         } else if (a[i] > 99) {
//             break;
//         }
//     }    
// }

// twoDigitsThree(arr2);


// const twoDigitsThree = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         //const a = arr[i];
//         if ((Math.abs(arr[i]) >= 10 && Math.abs(arr[i]) < 100) && arr[i] % 3 === 0) {
//             console.log(arr[i]);
//         }
//     }
// };

const twoDigitsThree = (arr) => { // így nem változtathatjuk majd az array elemeit!!!
    for (const a of arr) {
        if ((Math.abs(a) >= 10 && Math.abs(a) < 100) && a % 3 === 0) {
        console.log(a);
        }
    }
}





twoDigitsThree([33, 66, 12, -12, -66]);