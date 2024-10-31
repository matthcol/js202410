import {readFile} from 'fs/promises'

async function readCitiesOfDepartment(filename, department){
    return readFile(filename, {encoding: 'utf8'})
        .then(data => JSON.parse(data)
                .cities
                .filter(city => city.department_number == department)
                .toSorted((city1, city2) => city1.label.localeCompare(city2.label))
        )
}

// const data = await readCitiesOfDepartment('data/cities.json', 13)
// console.log(data.slice(0, 3))
// console.log("number of cities:", data.length)

const prettyPrintCity = city => console.log(`\t- ${city.label} (${city.zip_code})`)

const departments = [13, 64, '09'] // error: dept=9999
Promise.all(
    departments.map(department => readCitiesOfDepartment('data/cities.json', department)
        .then(cityListOneDepartment => [department, cityListOneDepartment])
)).then(allResult => new Map(allResult))
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
})

// errors
// readCitiesOfDepartment('data/cities.nojson', 31),
    // readCitiesOfDepartment('data/cities.nojson', 31),