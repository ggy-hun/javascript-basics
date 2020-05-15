// Készítsünk függvényt (signum), ami egy számot vár paramétertül. 
//Visszatérési értéke -1, ha a szám negatív. 0, ha a szám 0, +1, ha a szám nagyobb, mint nulla!

const signum = (a) => {
    if (a < 0) {
        return -1;
    } else if (a === 0) {
        return 0;
    } else {
        return 1;
    }
};

console.log('Sig1 ', +signum(-5));
console.log('Sig2 ', +signum(0));
console.log('Sig3 ', +signum(3));