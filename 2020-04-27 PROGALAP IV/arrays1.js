const animals = ['cica', 'kutya'];

console.log(animals); //a teljes tömböt írja ki
console.log(animals[0]);
console.log(animals.length);  //tömb hosszát kéri le
animals[1] = 'tengerimalac';  //a tengerimalac fölülírja a kutyát
console.log(animals);
animals.push('tigris');  //plusz elemet töltünk az arraybe
console.log(animals);
animals[3] = 'pandamedve'; // ugyanígy plusz elem
console.log(animals);
animals[5] = 'róka';  // ugyanígy plusz elem, de lesz közte undefined elem
console.log(animals);
const lastAnimal = animals.pop(); //poppal meg mindig kiveszed az utolsó elemet
console.log(lastAnimal, animals);

for(let i = 0; i < animals.length; i++) {   //a tömb "bejárása", minden elem kiíratása
    console.log(animals[i]);
}