<template>
  <div id="app">
    <nav>
      <img src="./assets/logo.png" />
      <span>学习 Vue.js</span>
    </nav>
    <div class="container">
      <Test></Test>
    </div>
  </div>
</template>

<script>
import Test from "./components/Test";
export default {
  name: "App",
  components: {
    Test
  }
};
</script>

<style>
nav {
  display: flex;
  border-bottom: 1px solid #eee;
}
nav img {
  width: 40px;
  height: 40px;
  margin: 0 20px;
  padding-bottom: 5px;
}
nav span {
  font-size: 25px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app .container {
  width: 80%;
  margin: 0 auto;
}
</style>
