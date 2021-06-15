function generateCorrelation(repos, deployments) {
  var list = [];

  deployments.map((element) => {
    if (repos.includes(element)) {
      list.push({
        repo: element,
        deployment: element,
        sql: '?',
        owner: '?',
      });
    } else {
      list.push({
        repo: '?',
        deployment: element,
        sql: '?',
        owner: '?',
      });
    }
  });

  repos
    .filter((element) => !deployments.includes(element))
    .map((item) =>
      list.push({
        repo: item,
        deployment: '?',
        sql: '?',
        owner: '?',
      }),
    );

  return list;
}

module.exports = generateCorrelation;
