import { createApp } from "vue";
import { cloneDeep } from "lodash";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(ElementPlus);
app.provide("$cloneDeep", cloneDeep);
app.mount("#app");
