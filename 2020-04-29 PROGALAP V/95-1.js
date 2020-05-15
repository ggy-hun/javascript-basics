//Készítsünk egy függvényt, amely egy tömböt vár paraméterül, 
//visszatérési értéke pedig egy új tömb, amely az első tömbben lévő páros számokat tartalmazza!

const selectEvens = (src) => {
    let out = [];
    let j = 0;
    for (let i = 0; i < src.length; i++) {
        if (src[i] % 2 === 0) {
            //out.push(src[i]);
            out[j] = src[i];
            j++;
        }
    }
    return out;
};

console.log('selectEvens: ', selectEvens([1, 2, 3, 4]));