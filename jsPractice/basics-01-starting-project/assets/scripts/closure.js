// function createCounter() {
//   let counter = 0;
//   const myFunction = function () {
//     counter = counter + 1;
//     return counter;
//   };
//   return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log("example increment", c1, c2, c3);

// csbin.io/closures
// ------------------------------------------------------
// function createFunction() {
//   function myfunc() {
//     return console.log("hello")
//   }
//   return myfunc;
// }
// const function2 = createFunction();
// function2();
// -----------------------------------------------------------------------

// ---------------------------------------------------------
// function createFunctionPrinter(input) {
//   function myfunc() {
//     return console.log(input);
//   }
//   return myfunc;
// }
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');
// // ----------------------------------------------------------
function addByX(x) {
  const addBy = num => {
    return num + x;
  }
  return addBy;
}

const addByTwo = addByX(2);
function once(func) {
  let counter = 0;
  let onceVal;
  const innerFunc = val => {
    if (counter === 0) onceVal = func(val);
    counter++;
    return onceVal;
  }
  return innerFunc;
}
const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6
