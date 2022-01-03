function outer() {
  let counter = 0;
  let abc = 12;
  function incrementcounter() {
    counter++;
    console.log(counter);
  }
  console.log(`${counter} hello`);
  return incrementcounter;
}
const myFunc = outer();
myFunc();
myFunc();

const myFunc2 = myFunc;
myFunc2();
myFunc2();

