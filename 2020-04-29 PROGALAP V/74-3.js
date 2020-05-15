//Készíts egy fg-t (), ami egy számokkal teli tömböt vár paraméterül és összeadja a páros indexeken lévő számokat, valamint
//kivonja a páratlan indexen lévő számokat! pl fgv ([1,2,3,4]) = (1 - 2 + 3 - 4) = -2

const addSub = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sum += arr[i];
        } else {
            sum -= arr[i];
        }
    }
    return sum;
};

console.log('Add', addSub([1, 2, 3, 4]));