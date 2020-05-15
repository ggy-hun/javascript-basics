const a = Math.round(Math.random() * 200 + 1);
console.log('a = ' + a);
function twoDigits(a)
   {
      return a % 10 + Math.floor(a / 10);
   }

if (100 > a && a > 9) {
    console.log(twoDigits(a));
} else {
    console.log('A szám nem kétjegyű');
}