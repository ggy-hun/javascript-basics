//Készítsünk egy függvényt (replaceDigits), ami egy stringet vár paraméterül,
//és kicseréli a benne található szám karaktereket az angol nevükre! Pl : abc123 -> abcOneTwoThree

const replaceDigits = (str) => {
    let out = '';
    for (const ch of str) {
        switch (ch) {
            case '1': out += 'One'; break;
            case '2': out += 'Two'; break;
            case '3': out += 'Three'; break;
            // (...)
            default: out += ch;
        }
    }
    return out;
}

console.log('Replace', replaceDigits('abc123'));