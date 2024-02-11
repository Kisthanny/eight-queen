import instance from "./customAxios";

export default {
  install: function (Vue) {
    function myAxiosInit() {
      this.$post = instance.post;
      this.$get = instance.get;
    }
    Vue.mixin({ beforeCreate: myAxiosInit });
  },
};
