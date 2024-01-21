import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/eightQueens" },
  { path: "/eightQueens", component: () => import("@/views/eightQueens.vue") },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
