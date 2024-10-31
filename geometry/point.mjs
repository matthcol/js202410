import Form from "./form.mjs";

export default class Point extends Form {

    x;
    y;

    constructor({name="#noname", x=0.0, y=0.0}){
        super(name)
        this.x = x;
        this.y = y;
    }

    /**
     * @inheritdoc
     * @override
     */
    translate(deltaX, deltaY){
        this.x += deltaX
        this.y += deltaY
    }

    /**
     * distance between this point and another point
     * @param {Point} other 
     * @returns {number} distance
     */
    distance = (other) => Math.hypot(
        this.x - other.x,
        this.y - other.y
    )

    toString = () => `${this.name}(${this.x}, ${this.y})`

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @returns {Point}
     */
    static fromCoordinates(x, y){
        return new Point({x, y})
        
        // alt. version 
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
        // return new this({x, y})
    }
}