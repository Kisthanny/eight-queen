import { createApp } from "vue";
import store from "@/store/index";
import router from "@/router/index";
import directives from "@/directives/index";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);

directives.map(({ name, directive }) => {
  app.directive(name, directive);
});

app.mount("#app");
