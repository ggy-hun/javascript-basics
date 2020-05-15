// gyakorló feladat

const humans = [
    {name: 'Feri', age: 20},
    {name: 'Géza', age: 19},
    {name: 'Máté', age: 11}
];

const searchHumanByName = (arr, name) => {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            return arr[i];
        }
    }
    return {};
};

console.log('searchHumanByName: ', searchHumanByName(humans, 'Feri'));



const searchHuman = (arr, key, value) => {
    for (const human of arr) {
        if (human[key] === value) {
            return human;
        }
    }
    return {};
};

console.log('searchHuman: ', searchHuman(humans, 'age', 19));
console.log('searchHuman: ', searchHuman(humans, 'name', 'Máté'));