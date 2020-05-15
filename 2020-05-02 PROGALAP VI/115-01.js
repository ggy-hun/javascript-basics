// Buborékrendezés
const arr = [5, 2, 4, 8, 6, 3];

const bubbleSort = (src) => {
  for (let i = src.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (src[j] > src[j + 1]) {
        const temp = src[j];
        src[j] = src[j + 1];
        src[j + 1] = temp;
      }
    }
  }
};

bubbleSort(arr);
console.log(arr);
