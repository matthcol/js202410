const promise1 = (value) => Promise.resolve(123 + value);
const promise2 = () => new Promise((resolve) => 
      setTimeout(resolve, 1000, 321)
    );

// chain 1
promise2()
    .then(value => promise1(value)
        .then(value2 => console.log('chain1:', value2))
    )

// chain 2
promise2()
    .then(value => promise1(value)) // NB: internal promised is returned
    .then(value2 => console.log('chain2:', value2))

// wrong chain
// chain 3
promise2()
    .then(value => {promise1(value);}) // no return value
    .then(value2 => console.log('chain3:', value2))