const calculator = require('./calculator'); 
//gyakorlatilag egy object, amit meghivtunk a masik filebol
//nem kell odairni hogy .js, a require alapbol js fileokat hiv meg

const s = calculator.sum(5, 10);
console.log(s);
console.log(calculator.num);
console.log(calculator.pi);


// module.exports = {
//     name: 'feri'
// };

const welcome = require('./welcome')('Kata');
welcome.hello();
welcome.asd();