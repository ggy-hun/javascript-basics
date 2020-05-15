//Készítsünk egy függvényt (createStr), ami egy számot vár paraméterül, 
//és visszaadj az angol abc első n betűjét egy stringben! Pl n = 5 esetén abcde

const createStr = (size) => {
    return 'abcdefghijklmnopqrstuvwxyz'.substring(0, size);
};

console.log('abc betűi: ', createStr(26));