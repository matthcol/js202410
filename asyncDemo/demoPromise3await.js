/**
 * @param {number} value
 * @returns Promise<number>
 */
const promise1 = (value) => Promise.resolve(123 + value);

/**
 * 
 * @returns Promise<number>
 */
const promise2 = () => new Promise((resolve) => 
      setTimeout(resolve, 1000, 321)
    );

/**
 * @returns {Promise<void>}
 */
async function mainNoReturn() {
    const value = await promise2()
    console.log('value from first call:', value)
    const value2 = await promise1(value)
    console.log('value from first call:', value2)
}

/**
 * 
 * @returns Promise<number>
 */
async function mainReturn(){
    const value = await promise2()
    const value2 = await promise1(value)
    return value2 + 1 // return value is wrapped in a Promise
}

mainNoReturn()
    .then(() => console.log('mainNoReturn finished'))

mainReturn()
    .then(result => console.log('mainReturn result:', result))

const result2 = await mainReturn()
console.log('mainReturn result 2:', result2)