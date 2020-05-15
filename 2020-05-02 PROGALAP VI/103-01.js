// Scope

const name = 'Feri'; // Globális láthatóság

console.log(name);

const print = (asd) => { // function parameter scope
  console.log(asd);
  const i = 0; // function scope, csak a fg-en belül látható
  if (i === 0) {
    const k = 10; // csak blockon belül látható, a fg-ben sem tudjuk már felhasználni máshol!
    console.log(k);
  }
  // console.log(k); u.a, mint fentebb
  console.log(i);
  console.log(name);
};

// console.log(asd); function parameter scope
// console.log(i); nem érjük el a function scope miatt
print();

// Global -> Function -> Block -> Function parameter
