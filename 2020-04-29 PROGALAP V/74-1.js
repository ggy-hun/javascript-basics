//Készítsünk egy fg-t (maxLength), ami egy stringekkel teli tömböt vár és kiírja a leghosszabb stringet!

const maxLength = (arr) => {
    let max= arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i].length > max.length) {
            max = arr[i];
        }
    }
    return max;
};


console.log(maxLength(['a', 'abc', 'asdfd', 'ab']));

console.log(['a', 'abc', 'asdfd', 'ab'].length);