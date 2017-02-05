
function fetchArticles() {
  return new Promise((resolve, reject) => {
    const timeout = 3000;

    setTimeout(() => {
      const articles = require('./articles.json');
      resolve(articles);
    }, timeout);
  });
}

export default {
  fetchArticles
};
