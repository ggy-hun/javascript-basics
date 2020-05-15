const a = 2;
const b = 6;
const c = 3;
const d = Math.pow(b, 2) - 4 * a * c;

if (d < 0) {
    console.log('Nincs valós gyök.');
} else if (d === 0) {
    const x = -b / a * 2;
    console.log('Egy valós gyök van, ami: ' + x);
} else {
    const y1 = -b + Math.sqrt(d) / 2 * a;
    const y2 = -b - Math.sqrt(d) / 2 * a;
    console.log('Két gyökünk van: ' + y1 + ' és ' + y2);
}