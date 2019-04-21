import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:{
      username:'admin',
      userpwd:'admin123'
    }
  },
  getters:{
    getUser(state){  // 获取state中数据
      return state.user
    }
  },
  mutations: {
    changeUserName(state,newName){
      state.user.username = newName
    }
  },
  actions: {}
});
