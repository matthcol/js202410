//class Movie {
export default class Movie {
    /**
     * @type {string}
     */
    title;

    /**
     * @type {number}
     */
    year;

    /**
     * duration of movie in minutes
     * @type {number|undefined}
     */
    duration;

    /**
     * 
     * @param {string} title 
     * @param {number} year 
     * @param {number|undefined} duration 
     */
    constructor(title, year, duration=undefined){
        this.title = title
        this.year = year
        this.duration = duration
    }
}

// export default Movie