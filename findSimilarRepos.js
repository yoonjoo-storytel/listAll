var {closest} = require('fastest-levenshtein')

function findSimilarRepos(onlyInRepos, onlyInDeploy){
    return onlyInDeploy.map(dep =>  
        `${dep}: ${closest(dep, onlyInRepos)}`);
}

module.exports = findSimilarRepos;