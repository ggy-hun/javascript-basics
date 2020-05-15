//Készítsünk egy függvényt (arrayOR), ami egy logikai értékekkel teli tömböt vár, 
//és visszaadja a tömb összes elemének a logikai VAGY művelettel végzett eredményét! 
//Pl [true, true, false] = true || true || false = true

const arrayOr = (arr) => {
    let out = false;
    for (const element of arr) {
        out = out || element;
    }
    return out;
};

console.log('arrayOr: ', arrayOr([false, false, false]));