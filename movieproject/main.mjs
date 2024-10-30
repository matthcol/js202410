// import Film from "./movie.mjs";
// const m1 = new Film()

import { Temporal } from '@js-temporal/polyfill';
import Movie from "./movie.mjs";

const m1 = new Movie("Interstellar", 2014)
const m2 = new Movie("Joker", 2019, 122)

console.log(m1)
console.log(m1.title, m1.year, m1.duration)

console.log(m2)

const today = Temporal.Now.zonedDateTimeISO();
console.log(today.toString())
console.log(Temporal.Now.plainDateISO().toString())
console.log(Temporal.Now.plainDateTimeISO().toString())
console.log(Temporal.Now.plainTimeISO().toString())