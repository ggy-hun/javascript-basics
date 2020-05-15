// Uses AXEL's node module
const ctx = require('axel');

// Clear the terminal
ctx.clear();

// Sets the pixel BG color to orange
ctx.bg(0, 128, 255);

// Draw 100 random blue dots on the console
for (var i = 0; i < 100; i += 1) {
  ctx.bg(Math.round(Math.random() * 256), Math.round(Math.random() * 256), Math.round(Math.random() * 256));
  ctx.point(
    Math.random() * ctx.cols,
    Math.random() * ctx.rows
  );
}

ctx.cursor.restore();

const generate2dArray = (n, m) => {
  const arr = new Array(n); // Sorok létrehozása
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m); // minden sorhoz m oszlop rendelése
  }
  return arr;
};

const print2dArray = (arr) => {
  ctx.bg(100, 100, 100);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      ctx.point(i + 1, j + 1);
    }
  }
};

const arr = generate2dArray(3, 3);
