import Point from "./point.mjs";

const p1 = new Point({})
const p2 = new Point({name: 'A', x: 3.5, y: 4.5})
const p3 = new Point({name: 'B', x: 7.5, y: 1.5})

for (const p of [p1, p2]) {
    console.log(p)
    console.log(p.toString())
    console.log()
}

const d = p2.distance(p3)
console.log(d)

const p4 = Point.fromCoordinates(10.5, 4.5)
console.log(p4.toString())