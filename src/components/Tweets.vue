<template>
  <ul class="articles-container">
    <li v-for="article in articles">
      <tweet :article="article"></tweet>
    </li>
  </ul>
</template>

<script>
import Tweet from './Tweet';
import article from '../api/article';

export default {
  name: 'tweets',
  data() {
    return {
      isLoading: false,
      error    : '',
      articles : []
    };
  },
  components: {
    Tweet
  },
  methods: {
    dateFormatter(dateString) {
      const regexp  = /^[A-Za-z]*\s([A-Za-z]*)\s([0-9]*)\s.*/;
      const date    = new Date(dateString);
      const matches = date.toString().match(regexp);

      if (matches.length !== 3) {
        // invalid date
        return '';
      }

      // 0: "Mon Jan 30 2017 20:47:13 GMT+0900 (JST)"
      // 1: "Jan"
      // 2: "30"
      return matches[1] + ' ' + matches[2];
    },
    fetchArticles() {
      this.isLoading = true;

      article.fetchArticles()
      .then(articles => {
        const formatted = articles.map(i => {
          i.created = this.dateFormatter(i.created);
          return i;
        });
        this.articles = formatted;
      })
      .catch(err => {
        this.error = err.message() | err.errorMessage();
      })
      .then(() => {
        this.isLoading = false;
      });
    }
  },
  created() {
    this.fetchArticles();
  }
};
</script>

<style>
.articles-container {
  margin    : 0 auto;
  padding   : 0;
  width     : 480px;
  list-style: none;
}
</style>
