//Készítsünk egy függvényt, amely két tömböt vár paraméterül 
//(Az első fel van töltve elemekkel, a második üres), és átmásolja az első tömb elemeinek kétszeresét a második tömbbe!

const copy2x = (src, dest) => {
    for (let i = 0; i < src.length; i++) {
        dest[i] = src [i] * 2;
    }
    return dest;
};

console.log('Copy 2 x: ', copy2x([1, 2, 3, 4], []));