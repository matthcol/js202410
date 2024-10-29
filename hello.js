// for browser:
// "use strict"; 

console.log("Hello, it's tuesday")

// deprecated
var x = 12;

// let/const
const y = 12;
// const y = 24 // Error: already defined
// let y = 12 // Error: already defined
// y = 24; // Error: y cannot be reassigned

const city = {
    name: "Aix en Provence"
}
city.name = "Aix-en-Provence" // modify property
console.log(city)

for (let i=0; i < 10; i++){
    console.log(i)
}

const cityArray = ['Aix-en-Provence', 'Toulouse', 'Pau']
for (const c of cityArray){
    console.log(c)
    // c = c.toLowerCase() // const var not modifiable
    // console.log(c)
}