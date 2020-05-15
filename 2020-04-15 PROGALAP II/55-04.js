//Készítsünk függvényt (fact), ami egy számot vár paraméterül, 
//és visszaadja a szám faktoriálisát! Pl fact(5) = 5 * 4 * 3 * 2 * 1 = 120

const fact = (a) => {
    if (a === 0 || a === 1) {
        return 1;
    } else {
        for (let i = a - 1; i >= 1; i--) {
            a *= i;
        }
    }
    return a;
}

console.log(fact(3));