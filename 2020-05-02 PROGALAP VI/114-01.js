// 2. Beszúrásos rendezés

const insertionSort = (src) => {
  for (let i = 0; i < src.length; i++) {
    const temp = src[i];
    console.log('kiválasztott elem (', temp, ') :', src);
    let j = i - 1;
    while (j >= 0 && src[j] > temp) {
      console.log('följebb léptetjük: ', src[j]);
      src[j + 1] = src[j];
      j--;
    }
    src[j + 1] = temp;
  }
};

const arr = [5, 2, 4, 8, 6, 3];

insertionSort(arr);
console.log(arr);
