const citiesO = [
    {
        name: 'Aix-en-Provence',
        department: '13',
        population: 3
    }, 
    {
        name: 'Toulouse',
        department: '31',
        population: 4
    }, 
    {
        name: 'Pau',
        department: '64',
        population: 2
    }, 
    {
        name: 'Marseille',
        department: '13',
        population: 4_000_000
    }, 
    {
        name: 'Fuveau',
        department: '13',
        population: 4
    }, 
    {
        name: 'Foix',
        department: '09',
        population: 8
    }, 
    {
        name: 'Ajaccio',
        department: '2A',
        population: 100
    }, 
    {
        name: 'Dijon',
        department: '21',
        population: 1
    }, 
    {
        name: 'Lézignan-Corbières',
        department: '11',
        population: 40
    }, 
    {
        name: 'Laval',
        department: '53',
        population: 4
    }, 
    {
        name: 'Lyon',
        department: '69',
        population: 4
    }, 
]

// filter cities of dept 13 and transform them in upper case
console.log()
const extract = citiesO.filter(city => city.department == '13')
    .map(city => city.name.toUpperCase())
console.log(extract)

console.log()
const extract2 = citiesO.filter(city => city.department == '13')
    .map(city => ({  ...city, name: city.name.toUpperCase() })) // merge objects
console.log(extract2)

console.log()
const extract3 = citiesO.filter(city => city.department == '13')
    .map(city => ({ name: city.name.toUpperCase(), department: city.department })) 
console.log(extract3)

// iterate over cities and print index, name, dept (use for/entries, forEach)
console.log()
citiesO.forEach((city, index) => console.log(index, city.name, city.department))

console.log()
for (const [index, {name, department}] of citiesO.entries()){
    console.log(index, name, department)
}

// sort vs toSorted, splice vs toSpliced, reverse vs toReversed, [i] = vs with (inplace vs copy methods)

// Inplace sort
// NB: sort is stable (is departments are equal, keep original order)
console.log()
citiesO.sort((c1, c2) => c1.department.localeCompare(c2.department))
console.log(citiesO)

citiesO.sort((c1, c2) => {
    let cmp = c1.department.localeCompare(c2.department) // string order
    if (cmp == 0) cmp =  c1.name.localeCompare(c2.name)  // string order according to locale fr_FR
    return cmp
})
console.log(citiesO)

// NB: see == or ===

// copy sort
const newCitiesO = citiesO.toSorted((c1, c2) => c1.name.localeCompare(c2.name))
console.log('old: ', citiesO)
console.log('new: ', newCitiesO)

const cmpFr = new Intl.Collator('fr')
const cmpEs = new Intl.Collator('es')

const wordsFr = ['été', 'étage', 'étuve', 'cœur', 'cobra', 'cordes', 'façade', 'fabrique', 'Fade', 'zèbre']
wordsFr.sort() // technical string sort
console.log(wordsFr)
wordsFr.sort(cmpFr.compare)
console.log(wordsFr)

const wordsEs = ['mañana', 'mano', 'matador']
wordsEs.sort()
console.log(wordsEs)
wordsEs.sort(cmpFr.compare)
console.log(wordsEs)
wordsEs.sort(cmpEs.compare)
console.log(wordsEs)

console.log(cmpFr.compare('été', 'ete'))


const cities13 = citiesO
    .filter(city => city.department === '13')
    .map(city => city.name)
    .toSorted((c1, c2) => cmpFr.compare(c2, c1))
    // .toReversed()  // !! double copy
console.log(cities13)

// splice or toSpliced
const first = citiesO.findIndex(city => city.department === '13')
const last = citiesO.findLastIndex(city => city.department === '13')
// citiesO.splice(first, last - first + 1) // inplace splice
const citiesO2 = citiesO.toSpliced(first, last - first + 1) // new array
console.log(citiesO)
console.log(citiesO2)

// slice is not splice
console.log('slice ..', citiesO.slice())
console.log('slice ..2', citiesO.slice(0, 2))
console.log('slice 2..5', citiesO.slice(2, 5))
console.log('slice 5..', citiesO.slice(5))
console.log('slice -2..', citiesO.slice(-2))



// sparse array
const data = ['Aix-en-Provence', 'Pau', 'Lyon']
data[10] = 'Marseille' // create cells 3..9 undefined et 10th to 'Marseille'
console.log(data) // [ 'Aix-en-Provence', 'Pau', 'Lyon', <7 empty items>, 'Marseille' ]
data.splice(10,1)
console.log(data)
console.log(data[9]) // undefined
console.log(data.keys()) // keys is an iterator
console.log([...data.keys()])

const itKeys = data.keys()
for (let i=0; i < 12; i++ ) {
    const {value: key, done: isDone} = itKeys.next()
    console.log(key, isDone)
}

for (const key2 of data.keys()){ // for .. of handle 'done' property automatically 
    console.log(key2)
} 

// NB: 
// - Array is iterable: Array.prototype[Symbol.iterator]() + .values(), .entries(), .keys()
// - Map is iterable: Map.prototype[Symbol.iterator]() + .values(), .entries(), .keys()
// - Object is not iterable, use Object.keys(obj), Object.values(obj)


// is there a city from dept 13
// are all cities from dept 13
// are all cities (filtered with dept == 13) are from dept 13


// reduce functions to boolean: .some, .every
const isFromDept13 = city => city.department === '13'
const okAny = citiesO.some(isFromDept13)
const okAll = citiesO.every(isFromDept13)
const okAllFiltered = citiesO
    .filter(isFromDept13)
    .every(isFromDept13)
console.log(okAny, okAll, okAllFiltered)

// reduce 1: total population of all cities

// reduce 2: transform array of objects in an a Map(key=name, value=object wit properties (department, population))

// reduce 3: group by departement => list cities, nb of cities
// {
//      '13': {
//          'cities': ['Marseille', 'Fuvveau' ...],
//          'size':  4
//      },
//      '31': {
//          'cities': ['Toulouse']
//            'size': 1
//      }
// }

// reduce 4: idem with result as a Map




