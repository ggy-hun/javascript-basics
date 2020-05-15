const fact = (a) => {
    let result = 1;
    for(i = 2; i <= a; i++) {
        result = result * i;
    }
    return result;
}

console.log(fact(4));