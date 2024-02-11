<template>
  <section class="user-info" v-loading="loading">
    <div class="top">
      <img :src="userInfo.avatar" alt="avatar" class="avatar" />
      <div class="info">
        <span class="name">{{ userInfo.userName || "--" }}</span>
        <div class="right">
          <span class="mobile">{{ userInfo.mobile || "--" }}</span>
          <span class="email">{{ userInfo.email || "--" }}</span>
        </div>
      </div>
    </div>
    <p class="description">{{ userInfo.description || "--" }}</p>
  </section>
</template>

<script>
import { qryUserInfo } from "@/api/index";
export default {
  data() {
    return {
      userInfo: {},
      loading: false,
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      try {
        this.loading = true;
        const response = await qryUserInfo({ userId: "" });
        this.userInfo = response.data;
      } catch (error) {
        this.$myNotify(error.message);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  margin: 16px;
  padding: 16px;
  height: 114px;
  border-radius: 28px;
  background: rgba($color: #196cfc, $alpha: 0.05);
  box-shadow: 2px 2px 6px #e0e0e0;
  color: #262a30;
  font-size: 12px;
  .top {
    display: flex;
    align-items: center;
    height: 48px;
    .avatar {
      border-radius: 100px;
      width: 48px;
      margin-right: 8px;
    }
    .info {
      width: 100%;
      height: 38px;
      display: flex;
      justify-content: space-between;
      .right {
        text-align: end;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
  .description {
    height: 58px;
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>