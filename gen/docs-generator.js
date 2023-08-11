// import
const Pattern = require('../src/index.js');
const fs = require('fs');
const path = require('path');

// code line
const codeLines = fs.readFileSync(path.join(__dirname, '../src/index.js'), 'utf8')
    .split('\n')
    .map(e => e.trim());
const startLine = codeLines
    .findIndex(line => line === "PatternBuilder.prototype = {");
const endLine = codeLines
    .findIndex(line => line === "};");
const prototypeCodes = codeLines.slice(startLine + 1, endLine).filter(Boolean);

// get prototype functions comment & name
const functions = [];
let beforeLine = 0;
prototypeCodes.forEach((code, line) => {
    if (code === "},") {
        let eachFunction = prototypeCodes.slice(beforeLine, line + 1);
        let commentEndLine = eachFunction.findIndex(l => l.trim() === "*/") + 1;

        functions.push([
            eachFunction.slice(0, commentEndLine).join("\n").trim(),
            eachFunction.slice(commentEndLine).join("\n").trim()
        ]);
        beforeLine = line + 1;
    }
});

// process
let datas = [];
functions.forEach(func => {
    let [rawComment, body] = func;

    let data = {
        params: [],
        returns: "",
        example: "",
        funcName: ""
    };

    data.funcName = body.slice(0, body.indexOf("("));
    rawComment.split("\n").forEach((line, idx, lines) => {
        if (line.startsWith("* @param")) {
            let matched = line.trim().match(/^\* @param \{(?<type>.+)\} (?<name>.+)$/);
            data.params.push([matched.groups.name, matched.groups.type]);
        } else if (line.startsWith("* @return")) {
            let matched = line.trim().match(/^\* @return \{(?<type>.+)\}$/);
            data.returns = matched.groups.type;
        } else if (line.startsWith("* @example")) {
            data.example = lines.slice(idx + 1).map(e => e.substring(2)).join("\n").trim();
        }
    });

    datas.push(data);
});

// generate docs
let markdownData = "";

datas.forEach(data => {
    let template = fs.readFileSync(
        path.join(__dirname, `template${data.params.length !== 0 ? '-params' : ''}.md`), 'utf8'
    );

    markdownData += template
        .replace('{name}', data.funcName)
        .replace('{form}', `${data.funcName}(${data.params.map(e => e[0]).join(', ')})`)
        .replace('{params}', data.params.map(e => `| ${e[0]} | ${e[1]} |`).join('\n'))
        .replace('{example}', data.example)
        + "\n\n";
});

fs.writeFileSync(path.join(__dirname, 'docs.md'), markdownData);