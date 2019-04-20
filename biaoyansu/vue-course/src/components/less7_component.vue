<template>
  <div>
    <h2>配置组件</h2>
    <div class="content">
      <button @click="toggle_like" :class="{like:liked}">
        👍 点赞
        {{like_count}}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      like_count: 10,
      liked: false
    };
  },
  methods: {
    toggle_like: function() {
      if (!this.liked) {
        this.like_count++;
      } else {
        this.like_count--;
      }
      this.liked = !this.liked;
    }
  }
};
</script>
<style scoped>
.like{
  background-color: pink;
}
</style>

