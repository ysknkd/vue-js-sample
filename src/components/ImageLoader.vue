<template>
  <div class="image-container">
    <transition name="fade">
      <div v-if="isLoading">
      </div>
    </transition>
    <transition name="fade">
      <img v-if="!isLoading" :src="image" class="image" />
    </transition>
  </div>
</template>

<script>
export default {
  name : 'image-loader',
  props: {
    url: {
      type   : String,
      default: ''
    }
  },
  data() {
    return {
      isLoading: false,
      image    : null
    };
  },
  methods: {
    fetchImage(url) {
      this.isLoading = true;

      const loader = new Image();
      loader.onload = () => {
        this.image     = loader.src;
        this.isLoading = false;
      };
      loader.src = this.url;
    }
  },
  created() {
    this.fetchImage(this.url);
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

/** -------- BEGIN IMAGE LOADER STYLE */
.image-container {
  width     : 180px;
  height    : 180px;
  background: #D8D8D8;
}

.image {
  width     : 100%;
}
/** -------- END IMAGE LOADER STYLE */

</style>
