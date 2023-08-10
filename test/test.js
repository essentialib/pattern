const Pattern = require('../src/index.js');

// /^(?<timestamp>\d+),(?<author>.+)$/
const regex = Pattern(_ => _
    .startOfLine()
    .capture('timestamp', timestamp => timestamp
        .digit().oneOrMore()
    )
    .then(',')
    .capture('author', author => author
        .anything().oneOrMore()
    )
    .endOfLine()
);

console.log(regex.toRegExp())