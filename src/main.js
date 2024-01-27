import { createApp } from "vue";
import store from "@/store/index";
import router from "@/router/index";
import directives from "@/directives/index";
import provides from "@/provides/index";
import myNotify from "@/plugins/myNotify/index";
import myAxios from "@/plugins/axios/index";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(myNotify);
app.use(myAxios);

directives.map(({ name, directive }) => {
  app.directive(name, directive);
});
provides.map((name, value) => {
  app.provide(name, value);
});

app.mount("#app");
