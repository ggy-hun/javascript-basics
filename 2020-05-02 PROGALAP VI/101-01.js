// Únió
// pl:
// [1, 2, 3, 4, 5, 6]
// [7, 8, 1, 2, 5]
// kimenet: [1, 2, 3, 4, 5, 6, 7, 8]

const union = (src1, src2) => {
  const out = [];
  for (const element of src1) {
    out.push(element);
  }
  for (let i = 0; i < src2.length; i++) {
    if (!out.includes(src2[i])) {
      out.push(src2[i]);
    }
  }
  return out;
};

console.log('Union', union([1, 2, 3, 4, 5, 6], [7, 8, 1, 2, 5]));

// gyakorlás

const union2 = (src1, src2) => {
  const out2 = [];
  for (let i = 0; i < src1.length; i++) {
    out2.push(src1[i]);
  }
  for (let j = 0; j < src2.length; j++) {
    if (!out2.includes(src2[j])) {
      out2.push(src2[j]);
    }
  }
  return out2;
};

console.log('Union2: ', union2([1, 2, 3, 4], [3, 4, 5, 6]));
