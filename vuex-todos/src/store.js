import Vue from "vue";
import Vuex from "vuex";
import TODOS from './modules/TODOS'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules:{},
  modules:{
    TODOS  //在这里导入模块
  }
});
