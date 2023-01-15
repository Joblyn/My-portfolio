import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/Home.vue";
import * as ROUTES from "@/router/constants";

export const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    component: HomeView,
  },
  {
    path: ROUTES.BLOG.path,
    name: ROUTES.BLOG.name,
    component: () => import(/* webpackChunkName: "blog" */ "../views/Blog.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    };
  },
});

export default router;
