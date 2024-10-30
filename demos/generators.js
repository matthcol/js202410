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
 * @yields {number} values of Fibonacci sequence
 */
function *fiboN(n){
    // yield 0 1 1 2 3 5 8 
    if (n===0) return;
    let a = 0;
    yield a;
    if (n===1) return;
    let b = 1;
    yield b;
    // loop
    for (let i=0; i < n-2; i++) {
        [a, b] = [b, a + b] 
        yield b;
    }
    // return; // implicit
}

// consumes fiboN
// - for .. of loop
console.log("Fibonacci sequence: first 10 values")
for (const val of fiboN(10)){
    console.log(val)
}
// - spread operator
console.log("Fibonacci sequence (n=0):", [...fiboN(0)]) // []
console.log("Fibonacci sequence (n=1):", [...fiboN(1)]) // [0]
console.log("Fibonacci sequence (n=2):", [...fiboN(2)]) // [0, 1]
console.log("Fibonacci sequence (n=3):", [...fiboN(3)]) // [0, 1, 1]
console.log("Fibonacci sequence (n=10):", [...fiboN(3)]) // [0, 1, 1, 2, 3, 5, 8, 13, 21]

// - map/reduce pipeline


// idem with infinite generator

/**
 * Generate Fibonacci sequence (infinite generator)
 * @yields {number}
 */
function *fibo(){
    let a = 0;
    yield a;
    let b = 1;
    yield b;
    while (true) {
        [a, b] = [b, a + b] 
        yield b;        
    }
}

// drop/take exemple
const extract10 = [...fibo().take(10)]
console.log('0..10:', extract10)
console.log('20..30:', [...fibo().drop(20).take(10)])

console.log(fibo().take(500).find(v=> v > 10_000)) // take is a security if predicate is always false
console.log(fibo().find(v=> v > 10_000))
console.log(fibo().map((v,i) => [i, v]).find(([,v]) => v > 10_000))

// rewrite fiboN using fibo infinite and yield*
function *fiboN2(n){
    yield* fibo().take(n)
}

console.log([...fiboN2(10)])