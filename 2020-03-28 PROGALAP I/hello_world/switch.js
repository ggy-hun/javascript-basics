const num = Math.round(Math.random() * 5) + 1;
console.log(num);
switch (num) {
    case 1: console.log('Egy');
        break;
    case 2: console.log('Ketto');
        break;
    default:
        console.log('Tobb, mint ketto');
}