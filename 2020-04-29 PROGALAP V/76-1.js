//Készítsünk egy függvényt (generateArray), amely egy egész számot vár, és létrehoz egy,
//a paraméterben kapott számú elemmel rendelkező tömböt, melyet feltölt 1-10 közötti véletlen számokkal, és ezzel tér vissza!
//Hívjuk meg a függvényt, a visszatérési értékét tároljuk el egy tetszőleges nevű változóban!

const generateArray = (size) => {
    const arr = [];
    for (let i = 0;i < size; i++) {
        arr.push(Math.round(Math.random) * 9 + 1);
    }
    return arr;
};

console.log(generateArray(10));