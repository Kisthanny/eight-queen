import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/workBench.vue") },
  { path: "/eightQueens", component: () => import("@/views/eightQueens.vue") },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
