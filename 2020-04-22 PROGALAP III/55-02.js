const signum = (a) => {
    if (a > 0) {
        return 1;
    } else if (a === 0) {
        return 0;
    } else {
        return -1;
    };
}

console.log(signum(-5));
console.log(signum(0));
console.log(signum(5));