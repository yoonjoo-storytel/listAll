var listDeployments = require('./listDeployments.js');
var listRepos = require('./listRepos.js');
var genCorrelation = require('./generateCorrelation.js');
var writeCSV = require('./writeCSV.js');
var writeJSON = require('./writeJSON.js');
var listSQL = require('./listSQL.js');

/*
var mytoken = process.argv[2];
var url = process.argv[3];
*/

async function main() {
  /*
  var repos = await listRepos(mytoken, url);
  var deployments = await listDeployments();
  var list = genCorrelation(repos, deployments);

  writeCSV(list);
  writeJSON(list);
  */
  await listSQL();
}

main();
