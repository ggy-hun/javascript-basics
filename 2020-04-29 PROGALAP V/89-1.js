// const containsElement2 = (arr, element) => {
//     let i = 0;
//     while (i < arr.length && arr[i] !== element) {
//         i++;
//     }
//     if (i < arr.length) {                            // a köv 5 sort kiválthatjuk az alábbi módon
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(containsElement2([1, 2, 3, 4, 5], 6));

const containsElement2 = (arr, element) => {
    let i = 0;
    while (i < arr.length && arr[i] !== element) {
        i++;
    }
    return i < arr.length;
};

console.log('Eldöntés functionnel: ',containsElement2([1, 2, 3, 4, 5], 6));

console.log('Eldöntés .kulcsokkal: ', [1, 2, 3, 4, 5].includes(6));