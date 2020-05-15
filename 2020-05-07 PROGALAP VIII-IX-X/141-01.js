const triangle2 = (a, b, c) => {
  const k = a + b + c;
  const s = k / 2;
  const t = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
  return {
    perimeter: k,
    area: s
  };
};

console.log(triangle2(6, 6, 3));
