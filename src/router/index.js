/*
 * @Author: TWT Studio
 * @Date: 2021-03-23 18:49:19
 * @LastEditTime: 2021-03-23 20:04:39
 * @Description: Router control
 */
import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Home.vue"),
    meta: {
      title: "首页",
      requireAuth: false,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // 设置标签页title
  window.document.title =
    to.meta.title == undefined ? "招募中心" : `${to.meta.title} - 招募中心`;
  // 访问权限设置
  if (to.meta.requireAuth) {
    let token = true;
    if (!token) {
      next({
        path: "/login",
        query: {
          from: to.fullPath,
        },
      });
    }
  }
  next();
});

export default router;
