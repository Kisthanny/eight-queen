import axios from "axios";

const instance = axios.create();

const prefix = "/apphub/api";

instance.interceptors.request.use(function (config) {
  config.url = prefix + config.url;
  return config
});

export default {
  install: function (Vue) {
    function myAxiosInit() {
      this.$post = instance.post;
      this.$get = instance.get;
    }
    Vue.mixin({ beforeCreate: myAxiosInit });
  },
};
