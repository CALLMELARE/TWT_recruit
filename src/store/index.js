/*
 * @Author: TWT Studio
 * @Date: 2021-03-23 19:14:38
 * @LastEditTime: 2021-03-23 19:29:38
 * @Description: Vuex
 */
import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
});
