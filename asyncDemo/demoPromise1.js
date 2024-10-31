const promise1 = Promise.resolve(123);
const promise2 = new Promise((resolveInner) => 
      setTimeout(resolveInner, 1000, 321)
    );

promise2.then((value) => {
  console.log(value);
  // Expected output: 321
});
promise1.then((value) => {
  console.log(value);
  // Expected output: 123
});
