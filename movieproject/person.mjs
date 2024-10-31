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

    /**
     * 
     * @param {string} name 
     * @param {Temporal.PlainDate|undefined} birthdate 
     */
    constructor(name, birthdate=undefined){
        this.#name = name;
        this.#birthdate = birthdate
    }

    get name(){
        return this.#name
    }

    set name(value){
        this.#name = value
    }

    get birthdate() {
        return this.#birthdate
    }

    set birthdate(value){
        this.#birthdate = value
    }

    //toString = () => `${this.#name} (${this.#birthdate?.toString()})`
    toString = () => `${this.#name} (${this.#birthdate??"#NA"})`

}
