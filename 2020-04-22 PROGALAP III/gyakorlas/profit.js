const hektar = 100;
const hozam = 4.5;
const tonnaertek = 50000;
const termErtek = hozam *  tonnaertek;
const fbDij = 40000;
const termKtg = 250000;
const teljesKtg = fbDij + termKtg;



const eredmenyTamNelkul = (termErtek - teljesKtg) * hektar;
console.log(eredmenyTamNelkul);

const saps = 70000;
const tam = saps * hektar;
const eredmenyTammal = eredmenyTamNelkul + tam;

console.log(eredmenyTammal);