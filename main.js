var listDeployments = require('./listDeployments.js');
var listRepos = require('./listRepos.js');

var mytoken = process.argv[2];
var url = process.argv[3];

async function main(){
   
    var repos = await listRepos(mytoken,url);
  //  console.log(`===========${repos.length} repositories==========`);
  //  repos.map(item => console.log(item));
    
    var deployments = await listDeployments();
  //  console.log(`===========${deployments.length} deployments==========`);
  //  deployments.map(item => console.log(item));


    var matched = deployments.filter(element => repos.includes(element)).sort();
    console.log(`===========${matched.length} matched===========`);
    matched.map(item => console.log(item));

    var notMatchedRep = repos.filter(element => !deployments.includes(element)).sort();
    console.log(`=====${notMatchedRep.length} repos are not matched======`);
    notMatchedRep.map(item => console.log(item));
    
    var notMatchedDep = deployments.filter(element => !repos.includes(element)).sort();
    console.log(`=====${notMatchedDep.length} deployments are not matched======`);
    notMatchedDep.map(item => console.log(item));

    

}

main()


