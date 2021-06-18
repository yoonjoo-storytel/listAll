function generateList(repos, deployments, sql) {
  var list = [];
  var list2 = deployments.filter((item) => repos.includes(item.deployment));
  console.log('#matched: ' + list2.length);

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

  var onlySQL = sql.filter(
    (element) =>
      !list.find(function (item) {
        return item.sql == element;
      }),
  );
  onlySQL.map((element) =>
    list.push({
      repo: '?',
      deployment: '?',
      sql: element,
      owner: '?',
    }),
  );
  console.log('#onlySQL: ' + onlySQL.length);
  return list;
}

module.exports = generateList;
