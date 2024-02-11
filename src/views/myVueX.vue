<template>
  <div class="my-vuex">
    <el-input-number v-model="step" :min="1" label="step"></el-input-number>
    <header><MyButton text="add" @click="add" /></header>
    <h1 id="count"></h1>
  </div>
</template>

<script>
import store from "@/components/myVueX/index";
import MyButton from "@/components/myButton.vue";
export default {
  components: {
    MyButton,
  },
  data() {
    return {
      step: 1,
    };
  },
  computed: {
    count() {
      return store.state.count;
    },
  },
  mounted() {
    document.getElementById("count").innerText = String(this.count);
  },
  methods: {
    add() {
      store.commit("addCount", this.step);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-vuex {
  width: 100%;
  height: 100%;
  padding-top: 16px;
  header {
    padding: 16px;
  }
}
</style>