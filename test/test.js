const Pattern = require('../src/index.js');

// /^(?<timestamp>\d+),(?<author>.+)$/
const regex = Pattern(_ => _
        .find(_ => _.find('abc'))
    ,)

console.log(regex.toRegExp())