var listDeployments = require('./listDeployments.js');
var listRepos = require('./listRepos.js');
var genCorrelation = require('./generateCorrelation.js');

var mytoken = process.argv[2];
var url = process.argv[3];

async function main() {
  var repos = await listRepos(mytoken, url);
  var deployments = await listDeployments();

  var list = genCorrelation(repos, deployments);

  list.map((item) =>
    console.log(
      `repo: ${item.repo}; deployment: ${item.deployment}; sql: ${item.sql}; owner: ${item.owner}`,
    ),
  );
}

main();
