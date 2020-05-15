//Készítsünk egy függvényt (containsElement), mely egy értéket, valamint egy tömböt vár paraméterül. 
//A függvény logikai értékkel tér vissza annak függvényében, hogy tartalmazza-e a paraméterül kapott tömb a paraméterül kapott értéket!

const containsElement = (arr, element) => {
    for (const actual of arr) {
        if (actual === element) {
            return true;
        }
    }
    return false;
};

console.log(containsElement([1, 2, 3], 3));