import { createApp } from "vue";
import MyNotify from "./myNotify.vue";

export default {
  install: function (Vue) {
    function myNotifyInit() {
      let instance = null;
      this.$myNotify = function (message) {
        if (!instance) {
          const div = document.createElement("div");
          document.body.appendChild(div);
          const app = createApp(MyNotify);
          instance = app.mount(div);
        }
        instance.init(message);
      };
    }
    Vue.mixin({ beforeCreate: myNotifyInit });
  },
};
