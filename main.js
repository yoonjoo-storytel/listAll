var listDeployments = require('./listDeployments.js');
var listRepos = require('./listRepos.js');

var mytoken = process.argv[2];
var url = process.argv[3];

async function main(){
    var repos = await listRepos(mytoken,url);
    console.log("===========Github Repos==========");
    repos.map(item => console.log(item));
    
    var deployments = await listDeployments();
    console.log("===========Deployments==========");
    deployments.map(item => console.log(item));
}

main()


