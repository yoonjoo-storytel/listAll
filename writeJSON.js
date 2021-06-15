var fs = require('fs');

function writeJSON(list) {
  var data = JSON.stringify(list);
  try {
    fs.writeFileSync('out.json', data);
    console.log('JSON-file is saved.');
  } catch (error) {
    console.log(error);
  }
}

module.exports = writeJSON;
