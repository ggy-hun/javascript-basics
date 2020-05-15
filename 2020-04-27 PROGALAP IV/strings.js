const name = 'Ferenc';                  //string elemeinek kiíratása
for (let i = 0; i < name.length; i++) {
    const ch = name.charAt(i);
    console.log(ch);
}

for (const ch of name) {                //string elemeinek kiíratása forEach.el
    console.log(ch, ' 2');
}

const replaceEtoA = (str) => {          //karaktercsere stringben
    let out = '';                       //stringet elemenként nem lehet módosítani
    for (const ch of str) {
        if (ch === 'e') {
            out += 'a';
        } else {
            out += ch;
        }
    }
    return out;
}

console.log(replaceEtoA('elem'));
console.log(name.toLowerCase());        //pl emailcím eltárolása esetén
console.log(name.toUpperCase());
console.log(name.replace(/e/g, 'a'));   //e betűket a-ra cseréli
console.log(name.substring(0, 2));      //csak az első két karaktert jeleníti meg
console.log(name.charCodeAt(0));        //ASCII kodot irja ki az adott karakterre