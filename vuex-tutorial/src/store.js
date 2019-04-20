import Vue from "vue";
import Vuex from "vuex";
import User from "./api/user";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 纯粹的数据放在这里
    user: {
      username: "whh",
      userpwd: "123"
    }
  },
  mutations: {
    // 修改数据
    changeUserName(state,newName){
      // 修改用户数据
      state.user.username = newName;
    }
  },
  getters: {
    getUser: state => state.user,
    getUsername: state => state.user.username
    // 获取数据
  },
  actions: {
    async addUser(newName,newEmail){
      await User.addUser(this.newName, this.newEmail);
    }
  }
});
