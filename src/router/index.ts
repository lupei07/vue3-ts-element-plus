/*
 * @Author: lu
 * @Date: 2021-07-24 14:22:25
 * @LastEditTime: 2021-08-20 14:42:43
 * @FilePath: \vue3-ts-study\src\router\index.ts
 * @Description:
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const history = createWebHashHistory();

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Manage",
    meta: {},
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login/Manage.vue")
  },
  {
    path: "/login",
    name: "Login",
    meta: {},
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login/Index.vue")
  },
  {
    path: "/:catchAll(.*)",
    name: "·404",
    meta: {},
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/404.vue")
  }
];

const route = createRouter({
  history,
  routes
});

export default route;
