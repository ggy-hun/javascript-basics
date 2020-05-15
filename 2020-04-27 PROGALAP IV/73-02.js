const powerOfTwo = (arr, n) => {
    let num = 2;
    for (let i = 0; i < n; i++) {
        arr.push(num);
        num *= 2;
    }
    return arr;
}

console.log(powerOfTwo([], 5));