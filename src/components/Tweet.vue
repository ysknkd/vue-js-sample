<template>
  <transition name="fade">
    <div class="article-container">
      <div class="article-left">
        <div class="article-profile-image">
          <img :src="article.profileImage">
        </div>
      </div>
      <div class="article-body">
        <span class="article-full-name">{{ article.fullName }}</span>
        <span class="article-user-name">{{ article.userName }}</span>
        <span class="article-created">{{ article.created }}</span>
        <p class="article-text">{{ article.text }}</p>
        <div v-if="article.media" class="article-media">
          <div v-for="mediaItem in article.media" class="article-media-item">
            <image-loader :url="mediaItem.thumb.url"></image-loader>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ImageLoader from './ImageLoader';

export default {
  name: 'tweet',
  props: {
    article: {
      type   : Object,
      default: {}
    }
  },
  components: {
    ImageLoader
  }
};
</script>

<style>
/** -------- BEGIN TRANSITION */
.fade-enter-active, .fade-leave-active {
  transition   : opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity      : 0;
}
/** -------- END TRANSITION */

/** -------- BEGIN ARTICLE STYLE */
.article-container {
  display      : flex;
  background   : #F9F9F9;
}

.article-left {
  padding      : 16px 0 16px 16px;
}

.article-profile-image {
  height       : 56px;
  width        : 56px;
  border-radius: 28px;
  background   : #EEE;
  overflow     : hidden;
}

.article-profile-image img {
  width        : 56px;
}

.article-body {
  padding      : 16px;
}

.article-full-name {
  font-size    : 20px;
  color        : #222;
}

.article-user-name {
  font-size    : 20px;
  color        : #999;
}
  .article-user-name:before {
    content    : '@'
  }

.article-created {
  font-size    : 20px;
  color        : #999;
}
  .article-created:before {
    content    : ' - ';
  }

.article-text {
  margin       : 8px 0 0 0;
  font-size    : 20px;
  color        : #222;
}

.article-media {
  display      : flex;
  margin       : 16px 0 0 0;
}

.article-media-item {
  flex-grow    : 1;
  margin       : 0 0 0 16px;
}
  .article-media-item:first-child {
    margin       : 0;
  }
/** -------- END ARTICLE STYLE */

</style>
