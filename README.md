# pattern
Easy handling of JavaScript regular expressions.  

<a href="https://www.npmjs.com/package/@essentialib/pattern" target="_blank"><img src="https://img.shields.io/badge/npm-%40essentialib%2Fpattern-gray?logo=npm&labelColor=cc3534&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40essentialib%2Fpattern"></a>

## install & import
```shell
npm install @essentialib/pattern
```
```js
const Pattern = require("@essentialib/pattern");
```

## example
```js
// same as /-?(\d+)/
const isInteger = Pattern(_ => _
    .maybe('-')  
    .capture(g1 => g1
        .digit().oneOrMore()
    )
);

console.log(isInteger.test('-34'));  // true
```
