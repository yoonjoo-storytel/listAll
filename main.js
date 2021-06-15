var listDeployments = require('./listDeployments.js');
var listRepos = require('./listRepos.js');
var writeList = require('./writeList.js');
var findSimilarRepos = require('./findSimilarRepos.js');

var mytoken = process.argv[2];
var url = process.argv[3];

async function main(){
    var repos = await listRepos(mytoken,url);
    var deployments = await listDeployments();

    var matched =[];
    var onlyInRepos = [];
    var onlyInDeploy = [];
    deployments.map(element => {
        if(repos.includes(element)){
            matched.push(element)
        }else{
            onlyInDeploy.push(element)
        }
    });
    onlyInRepos = repos.filter(element => !deployments.includes(element)).sort();

    writeList(matched, `===========${matched.length} matched===========`, 'matched.txt')
    writeList(
        onlyInRepos, 
        `===========${onlyInRepos.length} repos are not matched===========`, 
        'onlyInRepos.txt');
    writeList(
        onlyInDeploy, 
        `========${onlyInDeploy.length} deployments are not matched========`, 
        'onlyInDeploy.txt');

    console.log(`Found ${repos.length} repositories, ${deployments.length} deployments`)
    writeList(
        findSimilarRepos(onlyInRepos, onlyInDeploy),
        `========deployments : similar repository========`, 
        'similarRepos.txt');
}

main()