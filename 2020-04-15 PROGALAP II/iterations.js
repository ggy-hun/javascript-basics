//gyalogkakukk-sakál kép!

//elöltesztelő ciklus (while ciklus)
//először teszteli a feltételt, és ha az igaz, akkor lefuttatja az utánaírt parancsokat
let i = 0;
while(i < 5) {
    console.log('while ' + i);
    i++;
}

console.log('---vége a while ciklusnak---');

//hátultesztelő ciklus (do while ciklus)
//először futtatja a parancsokat, majd utána teszteli a feltételt

let j = 10;
do {
    console.log('do while ' + j);
    j++;
} while (j < 5);

console.log('---vége a do while ciklusnak---');

//számláló ciklus (for ciklus)

for(let k = 0; k < 5; k++) {
    console.log('for ' + k);
}

console.log('---vége a for ciklusnak---')