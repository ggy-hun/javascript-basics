//Készítsünk egy olyan függvényt (indexOfElement), amely egy értéket, és egy tömböt vár paraméterül, 
//visszatérési értéke pedig -1, ha a keresett érték nem található meg a tömbben, ellenkező esetben a keresett elem első előfordulásának indexe!

const indexOfElement = (arr, element) => {              //ha többször is szerepel u.a. az elem, akkor az első előforduls indexét adja vissza
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;                                          //ha nem találja meg az elemet, akkor is vissza kell adnia  a fg-nek valamit, a
};                                                      //a -1 pedig nem létező index, szóval ez csak indikátor!

console.log('indexOfElement: ', indexOfElement([1, 2, 3, 4], 5));

console.log('indexOfElement, .indexOffal: ',[1, 2, 3, 4].indexOf(5));