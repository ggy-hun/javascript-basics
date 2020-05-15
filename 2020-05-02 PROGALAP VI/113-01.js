// Rendezés

// 1. minimum selection sort

const minimumSelectionSort = (src) => {
  for (let i = 0; i < src.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < src.length; j++) { // minimum keresés
      if (src[j] < src[minIndex]) {
        minIndex = j;
      }
    }
    console.log(i, ':', src, 'min', src[minIndex]);
    if (minIndex !== i) {
      const temp = src[i];
      src[i] = src[minIndex];
      src[minIndex] = temp; // let a = 5; let b = 2; ->csere a memóriában, feldolgozási sor:
    } // let temp = a; a = b; b = temp
  } // két pohár víz (kék és piros) felcserélése 3. pohár használatával
};

const arr = [5, 2, 4, 8, 6, 3];

minimumSelectionSort(arr);
console.log(arr);
