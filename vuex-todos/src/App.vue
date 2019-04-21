<template>
  <div id="app">
    <nav class="light-green lighten-3">
      <div class="nav-wrapper container">
        <a href="#" class="brand-logo center">
          <img src="./assets/logo.png" alt="">
        </a>
        <ul id="nav-mobile" class="left">
          <li>
            <router-link class="black-text" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="black-text" to="/about">About</router-link>
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
export default {};
</script>
<style lang="less">
@import url("../node_modules/materialize-css/dist/css/materialize.css");
.brand-logo img{
  width: 60px;
}
</style>
