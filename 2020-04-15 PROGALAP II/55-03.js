//Készítsünk egy függvényt (pow), ami két számot vár paraméterül (a, b), 
//és visszaadja az a^b (hatvány) értékét! 
//Ne használjunk beépített függvényeket!

const pow = (a, b) => {
    let base = a;
    for(let i = 1; i < b; i++) {
        a *= base;
    }
    return a;
};

console.log(pow(2, 5));