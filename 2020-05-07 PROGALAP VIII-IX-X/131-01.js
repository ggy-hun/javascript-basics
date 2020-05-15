const first = (num, callbackMethod) => {
  if (num === 0) {
    callbackMethod();
  }
};

// ---------------^^ csak a memóriában van jelen
const second = () => {
  console.log('Cica meg van hívva');
};

first(0, second);
first(0, () => { console.log('Másik callback'); }); // itt van létrehozva a fg, csak a lokális paraméterlistában, itt érhető el és csak a firstből lehet meghívni
