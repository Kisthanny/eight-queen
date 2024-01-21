<template>
  <Teleport to="body">
    <div class="my-notify" v-if="show">
      <div class="overlay" :style="overlayStyle"></div>
      <div class="notify-box" :style="{ zIndex: zIndex + 1 }">
        <div class="notify-title">{{ title }}</div>
        <div class="notify-content">{{ message }}</div>
        <div class="notify-buttons">
          <div
            class="button"
            v-for="(btn, index) in buttons"
            :key="`my-notify-btn-${index}`"
            :style="{
              color: btn.color,
            }"
            @click="handleBtnClick(btn.type)"
          >
            {{ btn.text }}
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { cloneDeep, includes } from "lodash";
const INIT_STATE = {
  show: true,
  zIndex: 1000,
  confirm: true,
  cancel: true,
  confirmColor: "#196cfc",
  cancelColor: "#fd2a33",
  confirmText: "confirm",
  cancelText: "cancel",
  backgroundColor: "#333333",
  backgroundAlpha: 0.8,
  title: "info",
  onConfirm: null,
  onCancel: null,
  message: "content",
};
export default {
  props: {},
  data() {
    return cloneDeep(INIT_STATE);
  },
  computed: {
    overlayStyle() {
      return {
        background: this.backgroundColor,
        opacity: this.backgroundAlpha,
        zIndex: this.zIndex,
      };
    },
    buttons() {
      const result = [];
      if (this.confirm) {
        result.push({
          type: "confirm",
          text: this.confirmText,
          color: this.confirmColor,
        });
      }
      if (this.cancel) {
        result.push({
          type: "cancel",
          text: this.cancelText,
          color: this.cancelColor,
        });
      }
      return result;
    },
  },
  created() {},
  methods: {
    handleBtnClick(type) {
      const action = {
        confirm: () => {
          if (this.onConfirm && typeof this.onConfirm === "function") {
            this.onConfirm();
          }
          this.show = false;
        },
        cancel: () => {
          if (this.onCancel && typeof this.onCancel === "function") {
            this.onCancel();
          }
          this.show = false;
        },
      }[type];
      action && action();
    },

    /**
     * message: String
     * options: Object
     */
    init(message) {
      this.reset();
      if (typeof message === "string") {
        this.message = message;
      } else if (typeof message === "object") {
        const stateKeys = Object.keys(INIT_STATE);
        Object.keys(message).map((key) => {
          if (includes(stateKeys, key)) {
            this[key] = message[key];
          }
        });
      } else {
        throw new TypeError(
          `reject ${typeof message}: init only except String or Object`
        );
      }
    },
    reset() {
      Object.keys(INIT_STATE).map((key) => {
        this[key] = INIT_STATE[key];
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.my-notify {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  @include center;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .notify-box {
    background: #ffffff;
    width: 300px;
    min-height: 200px;
    box-shadow: 2px 2px 6px #b2b2b2;
    @include center;
    flex-direction: column;
    justify-content: space-between;
    .notify-title,
    .notify-content,
    .notify-buttons {
      width: 100%;
      @include center;
    }
    .notify-title {
      height: 36px;
      box-shadow: 2px 2px 6px rgba($color: #b2b2b2, $alpha: 0.3);
    }
    .notify-content {
      padding: 16px;
    }
    .notify-buttons {
      justify-content: space-around;
      height: 48px;
    }
  }
}
</style>