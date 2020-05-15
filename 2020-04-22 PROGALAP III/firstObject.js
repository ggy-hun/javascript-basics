const first = {
    name:'Mate',
    age: 99,
    isMale: true,
    sayHello: () => { console.log('Hello, I\'m Mate'); },   //nem lehet sajnos ${name}-re hivatkozni
    child: {                                                //nested object
        name: 'Géza',
        age: 1,
        isMale: true
    },
    address: {                                              //nested object (egyszerubb kezeles)
        city: 'Szeged',                                     //nem lehet 2-nel tobb melyseget igy
        zip: 6723,                                          //majd a Lodash-el mar igen
        street: 'Kossuth'
    }
};

console.log(first);
first.name = 'Feri';
console.log(first);
first.sayHello();
console.log(Object.keys(first));
const field = 'name';
console.log(first[field]);
console.log(first.child.name);