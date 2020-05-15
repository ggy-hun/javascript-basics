let ticketPrice = Math.round(Math.random().toFixed(2) * 1000 + 1000);
let viewerAge = Math.round(Math.random() * 99 + 1);
console.log('A teljesárú jegyár: ' + ticketPrice);
console.log('A nézők száma és korai: ' + viewerAge);
while (viewerAge >= 0) {
    if (viewerAge > 65 || (viewerAge < 18 && viewerAge > 5)) {
        console.log('A néző kora: ' + viewerAge + ' és jegyára: ' + (ticketPrice / 2));      
    } else if (viewerAge <= 5) {
        console.log('A néző kora: ' + viewerAge + ' és jegyára: ' + (ticketPrice * 0));
    } else {
        console.log('A néző kora: ' + viewerAge + ' és jegyára: ' + ticketPrice);
    }
    viewerAge = viewerAge - 1;
}