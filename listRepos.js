async function listRepos(mytoken, repos) {
  var fetch = require('node-fetch');
  var parse = require('parse-link-header');
  var list = [];
  let nextPageLink = repos;
  do {
    response = await fetch(nextPageLink, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${mytoken}`,
      },
    }).then(function (response) {
      return response;
    });
    var parsed = parse(response.headers.get('link'));
    nextPageLink = parsed.next ? parsed.next.url : null;
    response.json().then((data) => {
      data.map((repo) => list.push(repo.name));
    });
  } while (nextPageLink);
  //list.sort();

  return list;
}

module.exports = listRepos;
