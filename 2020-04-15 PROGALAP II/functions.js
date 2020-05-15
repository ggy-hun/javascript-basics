const sum = (a, b) => {
    if (!a || !b) {
        return 'ERROR';
    }
    console.log('Meghívtak', a, b);
    const res = a + b;
    return res; // a + b
};

const result = sum(5, 4);
console.log('sum: ', result);
const result2 = sum(10, 23);
console.log('sum2: ', result2);
const result3 = sum(); //így NaN ->Not a Number (2 db undefinedból)
console.log('sum3: ', result3);

const sayHello = () => { //amikor csak kiíratunk valamit, akkor nem szükséges a return
    console.log('Hello'); // elég meghívni a függvényt
}

sayHello();

// function sayHello() {    //elvileg ez ódivatú verzió, kerülni kéne...
//     console.log('Hello');
// }