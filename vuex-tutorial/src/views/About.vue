<template>
  <div>
    姓名:
    <input type="text" v-model="name">
    用户名:
    <input type="text" v-model="username">
    邮箱:
    <input type="text" v-model="email">
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import UserAPI from "../api/user.js";
export default {
  data() {
    return {
      name: "",
      username: "",
      email: ""
    };
  },
  methods: {
    submit() {
      UserAPI.addUser(this.name, this.username, this.email);
      console.log({
        title:'点击创建',
        name: this.name,
        username: this.username,
        email: this.email
      });
    }
  }
};
</script>

<style>
</style>
