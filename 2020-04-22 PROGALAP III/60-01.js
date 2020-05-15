// const human1 = {
//     name: 'Bela',
//     age: 40,
//     height: 180,
//     isMale: true,
//     address: {
//         city: 'Szeged',
//         zip: 6723,
//         street: 'Retek utca',
//         number: 5
//     }
// };

// const human2 = {
//     name: 'Jozsef',
//     age: 35,
//     height: 190,
//     isMale: true,
//     address: {
//         city: 'Szeged',
//         zip: 6723,
//         street: 'Retek utca',
//         number: 10
//     }
// };

// console.log(human1);

// const grow = () => {
//     human1.age = human1.age + 1;
// }

// grow();

// console.log(human1);
// console.log(human2);

// const getOlder = () => {
//     if (human1.age > human2.age) {
//         console.log(human1.name + ' az idosebb!');
//     } else if (human1.age < human2.age) {
//         console.log(human2.name + ' az idosebb!');
//     } else {
//         console.log(human1.name + ' es ' + human2.name + ' egyidosek!');        
//     }
// };

// getOlder();


const getOlder = (a, b) => {
    if (a.age > b.age) {
        return a;
    } else {
        return b;
    }
};

console.log(getOlder({ name: 'Feri', age: 66 }, { name: 'Bala', age: 70 }));