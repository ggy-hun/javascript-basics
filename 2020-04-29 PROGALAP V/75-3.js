//Készítsünk egy függvényt (isIncreasing), ami egy számokkal feltöltött tömböt vár, 
//és eldönti, hogy a tömbben lévő elemek növekvő sorrendben vannak-e! 

const arr = [1, 2, 2, 3, 4];

const isIncreasing = (a) => {
    for(let i = 0; i < a.length - 1; i++) { //-1 nélkül az utolsó próba undefined lenne!
        console.log(a[i], a[i+1]);
        // console.log(typeof a[i+1]);
        // if (typeof a[i+1] === 'undefined') {     //undefined vizsgálata!
        //     console.log('a[i+1] undefined');
        // }
        if (a[i] > a[i+1]) { // a[i] <= a[i+1]
            return false;
        }
    }
    return true;
}

console.log(isIncreasing(arr));