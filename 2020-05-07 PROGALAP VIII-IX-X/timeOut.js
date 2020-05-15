let time = 1000;
const fun = () => {
  console.log('hello', time);
  time -= 100;
  if (time < 100) {
    console.log('Time is up');
    return;
  }
  setTimeout(fun, time);
};

fun();
