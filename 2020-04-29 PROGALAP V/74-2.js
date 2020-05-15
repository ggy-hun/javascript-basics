//Készíts egy függvényt (firstString), ami egy stringekkel teli tömböt vár paaraméterül
//és visszaadja a lexikografikus rendezés alapján legkisebb elemet! (Azt, ami abc szerint a legelső helyen áll)

const firstString = (arr2) => {
    let min = arr2[0];
    for(let i = 1; i < arr2.length; i++) {
        if (arr2[i].toLowerCase() < min.toLowerCase()) {
            min = arr2[i];
        }
    }
    return min;
};

console.log(firstString(['Zsalma', 'barack', 'kukac', 'ale', 'sor']));

//a Zs, ha nagybetus, a toLowerCase nelkul elore kerul, mas ASCII kod miatt!