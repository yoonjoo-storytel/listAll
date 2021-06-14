var listDeployments = require('./listDeployments.js');
var listRepos = require('./listRepos.js');

var mytoken = process.argv[2];
var url = process.argv[3];

async function main(){
    var repos = await listRepos(mytoken,url);
    console.log(`===========${repos.length} repositories==========`);
    repos.map(item => console.log(item));
    
    var deployments = await listDeployments();
    console.log(`===========${deployments.length} Deployments==========`);
    deployments.map(item => console.log(item));

    var matched = deployments.filter(element => repos.includes(element))
    console.log(`==========${matched.length} Matched========`);
    matched.map(item => console.log(item));
}

main()


