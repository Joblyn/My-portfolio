import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/Home.vue";
import * as ROUTES from "@/router/constants";

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    component: HomeView,
  },
  {
    path: ROUTES.ARTICLES.path,
    name: ROUTES.ARTICLES.name,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Articles.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
