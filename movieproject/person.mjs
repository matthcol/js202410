import { Temporal } from "@js-temporal/polyfill"


export default class Person {
    /**
     * @type {string}
     */
    #name

    /**
     * @type {Temporal.PlainDate|undefined}
     */
    #birthdate
}
