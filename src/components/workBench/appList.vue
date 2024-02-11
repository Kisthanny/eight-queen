<template>
  <section class="app-list" v-loading="loading">
    <div
      class="app"
      v-for="app in appList"
      :key="app.appId"
      @click="handleClickApp(app)"
    >
      <img :src="app.icon" alt="icon" class="icon" />
      <span>{{ app.appName }}</span>
    </div>
  </section>
</template>

<script>
import { qryAppList } from "@/api/index";
export default {
  data() {
    return {
      appList: [],
      loading: false,
    };
  },
  mounted() {
    this.getAppList();
  },
  methods: {
    async getAppList() {
      try {
        this.loading = true;
        const response = await qryAppList();
        this.appList = response.data.data;
      } catch (error) {
        this.$myNotify(error.message);
      } finally {
        this.loading = false;
      }
    },
    handleClickApp(app) {
      if (app.linkType === "2") {
        window.open(app.linkURL, "_blank");
      } else {
        this.$router.push({
          path: app.linkURL,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app-list {
  margin: 0 16px 0 16px;
  padding: 16px;
  min-height: 120px;
  border-radius: 28px;
  background: rgba($color: #df35d6, $alpha: 0.09);
  box-shadow: 2px 2px 6px #e0e0e0;
  font-size: 12px;
  color: #303133;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 7em;
    .icon {
      width: 36px;
      height: 36px;
      border-radius: 100px;
    }
    span {
      width: 7em;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>