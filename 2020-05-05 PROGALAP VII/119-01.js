// üres 2D tömb generálása

const generate2dArray = (n, m) => {
  const arr = new Array(n); // Sorok létrehozása
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m); // minden sorhoz m oszlop rendelése
  }
  return arr;
};

const arr = generate2dArray(3, 3);

console.log(arr);

// const print2dArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       process.stdout.write(arr[i][j] + ', ');
//     }
//     console.log();
//   }
// };

// print2dArray(arr);

// egyszerű if-else feltétel, TERNÁLIS OPERÁTOR
// (logikai feltétel ? 'igaz' : 'hamis')

const print2dArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j] + (j < arr[i].length - 1 ? ', ' : '\r\n'));
    }
  }
};

print2dArray(arr);
