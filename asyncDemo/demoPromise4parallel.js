const promise1 = (value) => Promise.resolve(123 + value);

const promise2 = (timeout, value) => new Promise((resolve) => 
      setTimeout(resolve, timeout, value)
    );

const promises = [
    promise1(123),
    promise2(1000, 456),
    promise1(0),
    promise2(2000, 789)
]


// for (const promise of promises){
//     promise.then(result => console.log('a result:', result))
// }

Promise.all(promises)
    .then(results => { // results in the same order of the call order
        console.log('all results:', results)
        const total = results.reduce((a, b) => a+b)
        console.log('total:', total)
    })

/**
 * 
 * @param {number[]} values 
 */
async function computeTwice(values){
    // on each value:
    //  - call promise1
    //  - call promise2
    //  - compute average result
    // final result: sum of all average intermediary results
    return 0
}

computeTwice([123, 456, 789])
    .then(finalResult => console.log('Final result (compute twice):', finalResult))