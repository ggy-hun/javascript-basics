// Metszet
// pl:
// [1, 2, 3, 4, 5, 6]
// [7, 8, 1, 2, 5]
// kimenet: [1, 2, 5]

const section = (src1, src2) => {
  const out = [];
  let count = 0;
  for (let i = 0; i < src1.length; i++) {
    for (let j = 0; j < src2.length; j++) {
      count++;
      if (src1[i] === src2[j] && !out.includes(src1[i])) {
        out.push(src1[i]);
        break; // countot breakeli!
      }
    }
  }
  console.log('Lépések: ', count);
  return out;
};

console.log('Section', section([1, 2, 3, 4, 5, 6], [7, 8, 1, 2, 5]));

// gyakorlás

const metszet = (src1, src2) => {
  const out2 = [];
  for (let i = 0; i < src1.length; i++) {
    for (let j = 0; j < src2.length; j++) {
      if (src1[i] === src2[j] && !out2.includes(src1[i])) {
        out2.push(src1[i]);
      }
    }
  }
  return out2;
};

console.log('Metszet: ', metszet([1, 2, 3, 4], [3, 4, 5, 6]));
