/*
 * @Author: TWT Studio
 * @Date: 2021-03-21 21:30:46
 * @LastEditTime: 2021-03-23 19:45:45
 * @Description: main.js
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
