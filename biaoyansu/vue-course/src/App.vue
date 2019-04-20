<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/logo.png" alt>
      <h3>@biaoyansu Vue基础课程</h3>
      <div class="link">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <div class="container">
    <router-view/>
    </div>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-bottom: 300px;
}
#nav {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  img {
    padding: 10px;
    width: 50px;
    height: 50px;
  }
  h3 {
    padding: 0 20px;
  }
  .link {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.3);
    text-align: center;
    padding: 20px 0;
    a {
      padding: 1rem;
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
.container{
  width: 70%;
  margin: 0 auto;
  h2{
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    &:before{
      content: '#';
      padding: 5px;
      color: #41b883;
    }
  }
  .content{
    margin-top: 30px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #eee;
  }
}
</style>
