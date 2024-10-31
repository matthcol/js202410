# JavaScript / ECMAScript

## Versions JS/ES
https://www.w3schools.com/js/js_versions.asp

## NVM
```
nvm list
nvm list available
nvm install xx.xx.xx
nvm use xx.xx.xx
```

## Node
https://nodejs.org/en/about/previous-releases
```
node --version
node hello.js
```

## Syntax
### Destructuring assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
### Spread
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

## map/reduce vs iterator/iterable
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
- Array objects have map/reduce methods: 
    - map, flatMap, filter, forEach
    - every, some, join, reduce, reduceRight
    - find, findIndex, findLast, findLastIndex
- Array, Set, Map, ... are iterable: [Symbol.iterator]() + values() + .keys() + .entries()
- String is iterable: [Symbol.iterator]()
- Iterator, Generator are Iterator/Iterable and share map/reduce API of Array
    - map, flatMap, filter, forEach
    - every, some, reduce, reduceRight
    - find (only this one)
    - + drop/take
    - + toArray() or [...iterator]

## Generators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator

```
function *mygenerator(){
    ...
    yield value
    ...
    yield* otherGenerator()
}
```

## Modules
2 types:
- commonJS
- module (ES Module)

To be defined in package.json with key "type" or with extensions .mjs or .cjs

## OOP
### class
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class

### this
'this' semantic depends on the context (global, instance, class, function, ...)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

### Mixin
https://developer.mozilla.org/en-US/docs/Glossary/Mixin