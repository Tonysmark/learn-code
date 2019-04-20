<template>
  <div id="app">
    <div class="links">
          <router-link to="/">home |</router-link>
    <router-link to="/about"> about</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang='less'>
#app {
  .links{
    position: fixed;
    bottom: 0;
    left: 48%;
    font-size: 20px;
  }
}
</style>
