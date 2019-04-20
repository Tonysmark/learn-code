<template>
  <div id="Home">
    <div class="row">
      <table>
        <tbody>
          <tr>
            <td></td>
            <td>{{getUser}}</td>
            <td>用户名： {{getUsername}}</td>
          </tr>
          <tr>
            <td>修改用户名 mutation</td>
            <td>
              <input type="text" v-model="name" @input="changeName">
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>
      <cp1></cp1>
      <div class="divider"></div>
      <h4>网络流</h4>
      <div>
        姓名
        <input v-model="newName" type="text">
      </div>
      <div>
        邮箱
        <input v-model="newEmail" type="text">
      </div>
      <button class="btn" @click="onclick">提交</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import cp1 from "../components/componentOne";
export default {
  data: () => ({
    name: "",
    newName: "",
    newEmail: ""
  }),
  components: {
    cp1
  },
  computed: {
    // 映射出来,这里拆解出mapGetter若干方法中的几个方法
    ...mapGetters(["getUser", "getUsername"])
  },
  methods: {
    changeName() {
      // v-on 监听并出发事件
      this.$store.commit("changeUserName", this.name);
      // 把这个change事件 提交到 store 中，调用 store 中的mutation下的changeUserName并把data中绑定的数据一并传过去了
    },
    onclick() {
      this.addUser(this.newName, this.newEmail);
    },
    ...mapActions(["addUser"])
  }
};
</script>

<style lang="less" scoped>
</style>

