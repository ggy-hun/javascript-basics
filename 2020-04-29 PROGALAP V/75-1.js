//Készítsünk egy függvényt (arrayAND), ami egy logikai értékekkel teli tömböt vár,
//és visszaadja a tömb összes elemének a logikai ÉS művelettel végzett eredményét! 
//Pl [true, true, false] = true && true && false = false

const arrayAnd = (arr) => {
    let out = true;
    for (const element of arr) {
        out = out && element;
    }
    return out;
};

console.log('AND', arrayAnd([true, true, false]));