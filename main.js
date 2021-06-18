var listDeployments = require('./listDeployments.js');
var listRepos = require('./listRepos.js');
var generateList = require('./generateList.js');
var writeCSV = require('./writeCSV.js');
var writeJSON = require('./writeJSON.js');
var listSQL = require('./listSQL.js');

var mytoken = process.argv[2];
var url = process.argv[3];

async function main() {
  var repos = await listRepos(mytoken, url);
  var deployments = await listDeployments();
  var sql = await listSQL();

  console.log('#repos: ' + repos.length);
  console.log('#deployments: ' + deployments.length);
  console.log('#databases: ' + sql.length);
  var list = generateList(repos, deployments, sql);

  writeCSV(list);
  writeJSON(list);
}

main();
