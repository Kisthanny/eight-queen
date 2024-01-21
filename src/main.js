import { createApp } from "vue";
import store from "@/store/index";
import router from "@/router/index";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { cloneDeep } from "lodash";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.provide("$cloneDeep", cloneDeep);
app.mount("#app");
