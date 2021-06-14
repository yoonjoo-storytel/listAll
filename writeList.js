var StringBuilder = require('node-stringbuilder');
var fs = require('fs');

function writeList(list, header, filename) {
    var sb = new StringBuilder(`${header}\n`);
    list.map(item => sb.appendLine(item));
    fs.writeFileSync(filename, sb.toString(),'utf8')
}

module.exports = writeList;