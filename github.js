import got from 'got';

const fetchRepoInfo = (repoName, callback) => {
  got(`https://api.github.com/repos/${repoName}`).then((response) => {
    const responseObject = JSON.parse(response.body);
    callback(responseObject);
  });
}

fetchRepoInfo('sinatra/sinatra', (repoResponseObject) => {
  console.log(repoResponseObject);
});