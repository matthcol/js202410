# JavaScript / ECMAScript

## Versions JS/ES
https://www.w3schools.com/js/js_versions.asp

### EcmaScript (short)

ES1	ECMAScript 1 (1997)
ES2	ECMAScript 2 (1998)
ES3	ECMAScript 3 (1999)
ES4	ECMAScript 4	Never released
ES5	ECMAScript 5 (2009)
ES6	ECMAScript 2015
ECMAScript 2016
ECMAScript 2017
ECMAScript 2018
ECMAScript 2019
ECMAScript 2020
ECMAScript 2021
ECMAScript 2022
ECMAScript 2023
ECMAScript 2024

### EcmaScript (detail)
ES1	ECMAScript 1 (1997)	First edition
ES2	ECMAScript 2 (1998)	Editorial changes
ES3	ECMAScript 3 (1999)	
- Added regular expressions
- Added try/catch
- Added switch
- Added do-while
ES4	ECMAScript 4	Never released
ES5	ECMAScript 5 (2009)
- Added "strict mode"
- Added JSON support
- Added String.trim()
- Added Array.isArray()
- Added Array iteration methods
- Allows trailing commas for object literals
ES6	ECMAScript 2015
- Added let and const
- Added default parameter values
- Added Array.find()
- Added Array.findIndex()
ECMAScript 2016 (7)
- Added exponential operator (**)
- Added Array.includes()
ECMAScript 2017 (8)
- Added string padding
- Added Object.entries()
- Added Object.values()
- Added async functions
- Added shared memory
- Allows trailing commas for function parameters
ECMAScript 2018 (9)
- Added rest / spread properties
- Added asynchronous iteration
- Added Promise.finally()
- Additions to RegExp
ECMAScript 2019 (10)
- String.trimStart()
- String.trimEnd()
- Array.flat()
- Object.fromEntries
- Optional catch binding
ECMAScript 2020 (11)
- BigInt
- String matchAll()
- The Nullish Coalescing Operator (??)
- The Optional Chaining Operator (?.)
- Logical AND Assignment Operator (&&=)
- Logical OR Assignment (||=)
- Nullish Coalescing Assignment (??=)
- Promise.allSettled()
- Dynamic Import
ECMAScript 2021
- Promise.any()
- String replaceAll()
- Numeric Separators (_)
ECMAScript 2022
- Array at()
- String at()
- RegExp /d
- Object.hasOwn()
- error.cause
- await import
- Class field declarations
- Private methods and fields
ECMAScript 2023
- Array findLast()
- Array findLastIndex()
- Array toReversed()
- Array toSorted()
- Array toSpliced()
- Array with()
- #! (Shebang)
ECMAScript 2024 (15)
- Object.groupBy()
- Map.groupBy()
- Temporal.PlainDate()
- Temporal.PlainTime()
- Temporal.PlainMonthDay()
- Temporal.PlainYearMonth()


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

## WEB APIs
Portail: https://developer.mozilla.org/en-US/docs/Web/API

- local storage: 
https://developer.mozilla.org/en-US/docs/Web/API/Storage_API
- web sockets:
https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API
https://en.wikipedia.org/wiki/HTTP/3
- workers: 
https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
https://developer.mozilla.org/en-US/docs/Web/API/Push_API
- images:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
https://developer.mozilla.org/en-US/docs/Web/API/SVG_API
https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API

## Web Components
https://developer.mozilla.org/en-US/docs/Web/API/Web_components
https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots