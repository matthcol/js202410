
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


// rewrite fiboN using fibo infinite and yield*
function *fiboN2(n){
    yield* fibo().take(n)
}

export {fibo, fiboN, fiboN2}

