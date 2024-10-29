const citiesO = [
    {
        name: 'Aix-en-Provence',
        department: '13'
    }, 
    {
        name: 'Toulouse',
        department: '31'
    }, 
    {
        name: 'Pau',
        department: '64'
    }, 
    {
        name: 'Marseille',
        department: '13'
    }, 
]

// filter cities of dept 13 and transform them in upper case
console.log()
const extract = citiesO.filter(city => city.department == '13')
    .map(city => city.name.toUpperCase())
console.log(extract)

console.log()
const extract2 = citiesO.filter(city => city.department == '13')
    .map(city => ({  ...city, name: city.name.toUpperCase()})) // merge objects
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

// sort vs toSorted, splice vs toSpliced, reverse vs toReversed (inplace vs copy methods)