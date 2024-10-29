const cities = ['Aix-en-Provence', 'Toulouse', 'Pau']
console.log(cities)
cities.push('Marseille')
console.log(cities)
const cities2 = cities // 2 variables reference same object
const cities3 = [...cities] // shallow copy
cities.push('Lyon')
console.log('cities:', cities)
console.log('cities2:', cities2)
console.log('cities3:', cities3)
const cities4 = ['Nice', ...cities, 'Toulon']
console.log('cities4:', cities4)
cities[2] = 'Montpellier'
console.log('cities:', cities)
console.log('cities4:', cities4)

// map/reduce
const citiesUpper = cities.map(city => city.toUpperCase())
console.log('citiesUpper:', citiesUpper)
console.log('cities:', cities)

const cities5 = cities.map(city => city.toUpperCase())
    .filter(city => city.length > 5)
console.log('cities5:', cities5)

const cities6 = cities.map(function (city){ return city.toUpperCase()})
    .filter(function (city) { return city.length > 5})
console.log('cities6:', cities6)

// named function with keyword 'function'
function isBigCity(city){
    return city.length > 5
}

// named function with 'arrow' notation
const isSmallCity = city => city.length <= 5

console.log(cities.filter(isBigCity))
console.log(cities.filter(isSmallCity))

// map with a 2 args function
const transform = (city, index) => `${index}: ${city}` // template string
console.log(cities.map(transform))

// map with a 0 arg function
console.log(cities.map(() => 1))

function f3(a, b, c, d=0){
    return `a=${a}; b=${b}; c=${c}; d=${d}`
}

console.log(f3())
console.log(f3(1))
console.log(f3(1, 2))
console.log(f3(1, 2, 3))
console.log(f3(1, 2, 3, 4))
// console.log(f3(1, 2, 3, 4, 5)) // Error linter but ok at execution
console.log(f3(1, null, null, 4))
const args3 = [1, 2, 3]
console.log(f3(1, ...args3)) // a=1, [b, c, d] = args3

console.log(cities.map(city => city.split('-'))) // Array<Array<string>>
console.log(cities.flatMap(city => city.split('-'))) // Array<string>

cities.map(city => city.toUpperCase())
    .filter(city => city.length > 5)
    .forEach(city => console.log(city))

// Iterator on arrays: .entries(), .values()
// 1. iterator on array values
console.log()
for (const city of cities.values()) {
    console.log(city)
}

// 1. iterator on array entries: [index, value]
console.log()
for (const [index,city] of cities.entries()) {
    console.log(index, city)
}

// array destructuration
console.log()
const args = [1, 'Marseille', false]
const [nb, aCity, ok] = args
console.log(nb, aCity, ok)
const [, aCity2, ok2] = args
console.log(aCity2, ok2)
const [nb3, , ok3] = args
console.log(nb3, ok3)
const [nb4, ...others] = args
console.log(nb4, others)






