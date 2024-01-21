<template>
  <div class="outer-case" v-resize="setInnerScale">
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script>
import { ElConfigProvider } from "element-plus";

import zhCn from "element-plus/dist/locale/zh-cn.mjs";

export default {
  name: "App",
  components: {
    ElConfigProvider,
  },
  data() {
    return {
      locale: zhCn,
    };
  },
  methods: {
    setInnerScale({ width, height }) {
      this.$store.commit("global/setInnerScale", { width, height });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.outer-case {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
