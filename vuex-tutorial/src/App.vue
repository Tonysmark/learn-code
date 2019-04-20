<template>
  <div id="app">
    <nav class="teal accent-4">
      <div class="nav-wrapper  container">
        <img src="./assets/logo.png" alt class="brand-logo center">
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link to="/">主页</router-link>
          </li>
          <li>
            <router-link to="/about">关于</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import "../node_modules/materialize-css/dist/js/materialize.min.js";
export default {};
</script>
<style lang="less">
@import url("../node_modules/materialize-css/dist/css/materialize.min.css");
#app {
  .brand-logo {
    width: 60px;
  }
}
</style>
