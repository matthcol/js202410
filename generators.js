// generator function
function *gen(){
    yield 12;
    yield 7;
    yield 8;
}

// generator in detail
const g = gen();
for (let i=0; i<5; i++) {
    console.log(g.next())
}

console.log()
for (const value of gen()){
    console.log(value)
}

console.log()
const values = [...gen()]
console.log(values)

/**
 * Generate Fibonacci sequence (limited to n values)
 * @param {number} n number of values in Fibonacci sequence 
 */
function *fiboN(n){
    // yield 0 1 1 2 3 5 8 
}

// consumes fiboN
// - for .. of loop
// - spread operator
// - map/reduce pipeline


// idem with infinite generator

/**
 * Generate Fibonacci sequence (infinite generator)

 */
function *fibo(){
    // yield 0 1 1 2 3 5 8 
}

// drop/take exemple