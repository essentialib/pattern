## startOfLine
```js
startOfLine()
```

**Examples**
```js
startOfLine() -> /^/
```

## endOfLine
```js
endOfLine()
```

**Examples**
```js
endOfLine() -> /$/
```

## or
```js
or()
```

**Examples**
```js
or() -> /|/
```

## tab
```js
tab([min=null], [max=null])
```

**Parameters**
| name | type |
|------|------|
| [min=null] | number|null |
| [max=null] | number|null |

**Examples**
```js
tab() -> /\t/
tab(2) -> /\t{2,}/
tab(2, 4) -> /\t{2,4}/
```

## word
```js
word([min=null], [max=null])
```

**Parameters**
| name | type |
|------|------|
| [min=null] | number|null |
| [max=null] | number|null |

**Examples**
```js
word() -> /\w/
word(2) -> /\w{2,}/
word(2, 4) -> /\w{2,4}/
```

## notWord
```js
notWord([min=null], [max=null])
```

**Parameters**
| name | type |
|------|------|
| [min=null] | number|null |
| [max=null] | number|null |

**Examples**
```js
notWord() -> /\W/
notWord(2) -> /\W{2,}/
notWord(2, 4) -> /\W{2,4}/
```

## digit
```js
digit([min=null], [max=null])
```

**Parameters**
| name | type |
|------|------|
| [min=null] | number|null |
| [max=null] | number|null |

**Examples**
```js
digit() -> /\d/
digit(2) -> /\d{2,}/
digit(2, 4) -> /\d{2,4}/
```

## notDigit
```js
notDigit([min=null], [max=null])
```

**Parameters**
| name | type |
|------|------|
| [min=null] | number|null |
| [max=null] | number|null |

**Examples**
```js
notDigit() -> /\D/
notDigit(2) -> /\D{2,}/
notDigit(2, 4) -> /\D{2,4}/
```

## whitespace
```js
whitespace([min=null], [max=null])
```

**Parameters**
| name | type |
|------|------|
| [min=null] | number|null |
| [max=null] | number|null |

**Examples**
```js
whitespace() -> /\s/
whitespace(2) -> /\s{2,}/
whitespace(2, 4) -> /\s{2,4}/
```

## notWhitespace
```js
notWhitespace([min=null], [max=null])
```

**Parameters**
| name | type |
|------|------|
| [min=null] | number|null |
| [max=null] | number|null |

**Examples**
```js
notWhitespace() -> /\S/
notWhitespace(2) -> /\S{2,}/
notWhitespace(2, 4) -> /\S{2,4}/
```

## linebreak
```js
linebreak()
```

**Examples**
```js
linebreak() -> /(?:\r\n|\r|\n)/
```

## br
```js
br()
```

**Examples**
```js
br() -> /(?:\r\n|\r|\n)/
```

## then
```js
then(item)
```

**Parameters**
| name | type |
|------|------|
| item | string|function(PatternBuilder): PatternBuilder |

**Examples**
```js
then('abc') -> /(?:abc)/
then(p => p.find('abc')) -> /(?:abc)/
```

## find
```js
find(item)
```

**Parameters**
| name | type |
|------|------|
| item | string|function(PatternBuilder): PatternBuilder |

**Examples**
```js
find('abc') -> /(?:abc)/
find(p => p.then('abc')) -> /(?:abc)/
```

## anything
```js
anything()
```

**Examples**
```js
anything() -> /./
```

## anythingBut
```js
anythingBut(arguments)
```

**Parameters**
| name | type |
|------|------|
| arguments | ...string|string[2] |

**Examples**
```js
anythingBut('abc') -> /[^abc]/
anythingBut('a', ['ㄱ', 'ㅎ']) -> /[^aㄱ-ㅎ]/
```

## anythingOf
```js
anythingOf(arguments)
```

**Parameters**
| name | type |
|------|------|
| arguments | ...string|string[2] |

**Examples**
```js
anythingOf('abc') -> /[abc]/
anythingOf('a', ['ㄱ', 'ㅎ']) -> /[aㄱ-ㅎ]/
```

## oneOrMore
```js
oneOrMore([str=null])
```

**Parameters**
| name | type |
|------|------|
| [str=null] | string|null |

**Examples**
```js
oneOrMore('abc') -> /(?:abc)+\/
then('abc').oneOrMore() -> /(?:abc)+\/
```

## noneOrMore
```js
noneOrMore([str=null])
```

**Parameters**
| name | type |
|------|------|
| [str=null] | string|null |

**Examples**
```js
noneOrMore('abc') -> /(?:abc)*\/
then('abc').noneOrMore() -> /(?:abc)*\/
```

## maybe
```js
maybe([str=null])
```

**Parameters**
| name | type |
|------|------|
| [str=null] | null|string |

**Examples**
```js
maybe('abc') -> /(?:abc)?/
then('abc').maybe() -> /(?:abc)?/
```

## repeat
```js
repeat(min, [max=null])
```

**Parameters**
| name | type |
|------|------|
| min | number |
| [max=null] | number|null |

**Examples**
```js
repeat(3) -> /{3,}/
repeat(3, 5) -> /{3,5}/
```

## capture
```js
capture([item=null], pattern)
```

**Parameters**
| name | type |
|------|------|
| [item=null] | string|null |
| pattern | Function |

**Examples**
```js
capture(p => p.find('abc')) -> /(abc)/
capture('item', p => p.find('abc')) -> /(?<item>abc)/
```

