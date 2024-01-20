<template>
  <div class="my-button" :style="style">{{ text }}</div>
</template>

<script>
const getSize = (input) => {
  return typeof input === "string" ? input : `${input}px`;
};
export default {
  name: "MyButton",
  props: {
    background: {
      type: String,
      default() {
        return "#196cfc";
      },
    },
    color: {
      type: String,
      default() {
        return "#ffffff";
      },
    },
    height: {
      type: [String, Number],
      default() {
        return "48px";
      },
    },
    text: {
      type: [String, Number],
      default() {
        return "button";
      },
    },
  },
  created() {
    this.style = {
      background: this.background,
      color: this.color,
      height: getSize(this.height),
      lineHeight: getSize(this.height),
    };
  },
};
</script>

<style>
.my-button {
  width: 100%;
  border-radius: 100px;
}
</style>
