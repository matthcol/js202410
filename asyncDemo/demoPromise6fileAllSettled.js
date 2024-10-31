import {readFile} from 'fs/promises'

async function readCitiesOfDepartment(filename, department){
    return readFile(filename, {encoding: 'utf8'}) // error if file not found
        .then(data => {
            const citiesThisDepartment = JSON.parse(data) // error if not json
                .cities // => error if key not exists
                .filter(city => city.department_number == department)
                .toSorted((city1, city2) => city1.label.localeCompare(city2.label))
            if (citiesThisDepartment.length === 0) {
                return Promise.reject(new Error(`Unknown department: ${department}`))
            }
            else return citiesThisDepartment
            }
        ) //.catch(() => Promise.reject(new Error('Incorrect file: not found, wrong JSON')))

}

// const data = await readCitiesOfDepartment('data/cities.json', 13)
// console.log(data.slice(0, 3))
// console.log("number of cities:", data.length)

const prettyPrintCity = city => console.log(`\t- ${city.label} (${city.zip_code})`)

const departments = [
    13, 64, '09', 
    99999, // error
] 

Promise.allSettled(
    departments.map(department => readCitiesOfDepartment('data/cities.json', department)
        .then(cityListOneDepartment => [department, cityListOneDepartment])
)).then(allResult => {
    allResult.filter(result => result.status === 'rejected')
        .forEach(result => console.log('Warning:', result.reason.message))
    return new Map(allResult.filter(result => result.status === 'fulfilled')
        .map(result => result.value))
})
// pretty print
.then(finalResult => {
    // console.log(finalResult)
    for (const [dep, cities] of finalResult.entries()){
        console.log('Department:', dep)
        cities.slice(0,5)
            .forEach(prettyPrintCity)
        console.log('\t ...')
        cities.slice(-5)
            .forEach(prettyPrintCity)
    }
}).catch(error => console.log('Process interrupted:', error))

// errors
// readCitiesOfDepartment('data/cities.nojson', 31),
    // readCitiesOfDepartment('data/cities.nojson', 31),