var csvWriter = require('csv-writer').createObjectCsvWriter;

function writeCSV(list) {
  var csvFormat = csvWriter({
    path: 'out.csv',
    header: [
      { id: 'repo', title: 'Repository' },
      { id: 'deployment', title: 'Deployment' },
      { id: 'sql', title: 'SQL' },
      { id: 'owner', title: 'Owner' },
    ],
  });
  csvFormat.writeRecords(list).then(() => console.log('CSV-file is saved.'));
}

module.exports = writeCSV;
