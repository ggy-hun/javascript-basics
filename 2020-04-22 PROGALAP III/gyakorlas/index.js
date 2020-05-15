const operators = require('./operators');
const subsidies = require('./subsidies');
const farmers = require('./farmers');

const sumSubsidies = (a) => {
    let sumSub = operators.sum(
        operators.mul(a.hectares, subsidies.saps),
        operators.mul(a.grasslands, subsidies.natura),    
        operators.mul(a.akg, subsidies.akg)
    );
    return sumSub;
}

//template literalban hogy nezne ki a console.log?
//thousand separator stringge alakitas nelkul lehetseges?

console.log('Az alabbi farmerek a kovetkezo tamogatasi osszegre adhatnak be igenylest targyevben:');
console.log(farmers.farmer1.firstName + ' ' + farmers.farmer1.lastName + ' ' + sumSubsidies(farmers.farmer1));
console.log(farmers.farmer2.firstName + ' ' + farmers.farmer2.lastName + ' ' + sumSubsidies(farmers.farmer2));
console.log(farmers.farmer3.firstName + ' ' + farmers.farmer3.lastName + ' ' + sumSubsidies(farmers.farmer3));
console.log(farmers.farmer4.firstName + ' ' + farmers.farmer4.lastName + ' ' + sumSubsidies(farmers.farmer4));
console.log(farmers.farmer5.firstName + ' ' + farmers.farmer5.lastName + ' ' + sumSubsidies(farmers.farmer5));