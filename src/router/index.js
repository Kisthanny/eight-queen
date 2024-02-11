import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/workBench.vue") },
  { path: "/eightQueens", component: () => import("@/views/eightQueens.vue") },
  { path: "/myVueX", component: () => import("@/views/myVueX.vue") },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
