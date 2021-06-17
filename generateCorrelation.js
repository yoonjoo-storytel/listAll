function generateCorrelation(repos, deployments) {
  var list = [];
  var list2 = deployments.filter((item) => repos.includes(item.deployment));
  console.log('antal matched: ' + list2.length);

  deployments.map((element) => {
    if (repos.includes(element.deployment)) {
      list.push({
        repo: element.deployment,
        deployment: element.deployment,
        sql: element.sql,
        owner: '?',
      });
    } else {
      list.push({
        repo: '?',
        deployment: element.deployment,
        sql: element.sql,
        owner: '?',
      });
    }
  });
  //   !deployments.find(function (dep) {
  //  return dep.deployment == item.metadata.labels.app;
  //})
  repos
    .filter(
      (element) =>
        !deployments.find(function (dep) {
          return dep.deployment == element;
        }),
    )
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
