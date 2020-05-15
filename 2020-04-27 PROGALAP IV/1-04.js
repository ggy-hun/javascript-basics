//Összegzés

const sumArray = (arr) => {                 //összeadja az array összes elemét
    let sum = 0;
    for(const element of arr) {
        sum += element;
    }
    return sum;
}

const sumArrayFor = (arr) => {             // u.a. csak forEach nélkül
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log('sumArray: ' + sumArray([1, 2, 3, 4]));


//Megszámlálás

const countElement = (arr, element) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}

console.log('countElement: ' + countElement([1, 2, 1, 3, 1], 1));

//Minimum-Maximum

const maxArr = (arr) => {
    //let max = Number.MIN_SAFE_INTEGER;    --->igy is lehet, de a kov. megoldas meg talan jobb:
    let max = arr [0];
    for(const element of arr) {
        if (element > max) {
            max = element;
        }
    }
    return max;
}

console.log('maxArr: ' + maxArr([300, -5, 2, 10, 20, -2]));