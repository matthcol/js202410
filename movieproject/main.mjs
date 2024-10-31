// import Film from "./movie.mjs";
// const m1 = new Film()

import { Temporal } from '@js-temporal/polyfill';
import Movie from "./movie.mjs";
import Person from './person.mjs';

const m1 = new Movie("Interstellar", 2014)
const m2 = new Movie("Joker", 2019, 122)

console.log(m1)
console.log(m1.title, m1.year, m1.duration)

console.log(m2)

// system date with Temporal API
const today = Temporal.Now.zonedDateTimeISO();
console.log(today.toString())
console.log(Temporal.Now.plainDateISO().toString())
console.log(Temporal.Now.plainDateTimeISO().toString())
console.log(Temporal.Now.plainTimeISO().toString())

const joker = new Person('Joaquin Phoenix', new Temporal.PlainDate(1974,10,28))
const lady = new Person('Lady Gaga')
console.log(joker)
console.log(joker.name)
console.log(joker.toString())

console.log(m2.toString())

console.log(lady.toString())
console.log(lady.birthdate?.toString())
lady.birthdate = new Temporal.PlainDate(1986, 3, 28)
console.log(lady.birthdate?.toString())