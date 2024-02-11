<template>
  <div class="work-bench">
    <UserInfo />
    <AppList />
  </div>
</template>

<script>
import UserInfo from "@/components/workBench/userInfo.vue";
import AppList from "@/components/workBench/appList.vue";
export default {
  components: {
    UserInfo,
    AppList,
  },
};
</script>

<style lang="scss" scoped>
.work-bench {
  width: 100%;
  height: 100%;
}
</style>