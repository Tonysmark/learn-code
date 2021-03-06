import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../node_modules/materialize-css/dist/js/materialize.js";
document.addEventListener("DOMContentLoaded", () => {
  M.AutoInit();
});
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
