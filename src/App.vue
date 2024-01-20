<template>
  <el-config-provider :locale="locale">
    <img alt="Vue logo" src="./assets/logo.png" />
  </el-config-provider>
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
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
