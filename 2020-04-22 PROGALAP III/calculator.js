// const index = require('./index');  ---> ne legyen korkoros hivatkozas!!!

const sum = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const mul = (a, b) => {
    return a * b;
};

const div = (a, b) => {
    return a / b;
};

const pi = 3.1415;

let num = 10;

module.exports = {              // mindig a file vegen kell exportalni
    sum: sum,
    sub: sub,
    mul,                        //mul: mul, ugyanaz, ha nincs fix ertek, igy is lehet irni
    div,                        //div: div,
    pi: pi,
    num: num
};
