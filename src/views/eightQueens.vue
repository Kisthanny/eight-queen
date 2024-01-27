<template>
  <div class="eight-queen" v-resize="setSafeBoardWidth">
    <div class="chess-board" ref="chessBoardRef">
      <div
        class="row"
        v-for="(row, rIndex) in chessBoardList"
        :key="`ROW-${rIndex}`"
      >
        <div
          class="cell"
          :class="cell.background"
          v-for="cell in row"
          :key="cell.id"
          :style="{
            width: `${cellWidth}px`,
            height: `${cellWidth}px`,
            lineHeight: `${cellWidth}px`,
          }"
          @click="handleCellClick(cell)"
        >
          {{ cell.content }}
        </div>
      </div>
    </div>
    <div class="footer"><MyButton text="clear" @click="init" /></div>
  </div>
</template>

<script>
import initChessBoardList from "@/functions/eightQueens/initChessBoardList";
import validateQueensStatus from "@/functions/eightQueens/validateQueensStatus";
import MyButton from "@/components/myButton.vue";
export default {
  components: { MyButton },
  data() {
    return {
      chessBoardList: [],
      boardWidth: 0,
      isValid: true,
    };
  },

  computed: {
    cellWidth() {
      return this.boardWidth / 8;
    },
  },

  created() {
    this.init();
  },

  mounted() {},

  methods: {
    setSafeBoardWidth({ width, height }) {
      const safeHeight = height - 74 - 32;
      this.boardWidth = Math.min(width - 32, safeHeight);
    },
    handleCellClick(cell) {
      this.$myNotify({
        message: `${cell.colId}${cell.rowId}`,
        onConfirm: () => {
          console.log("on confirm");
        },
        cancel: false,
      });
      if (cell.content) {
        cell.content = "";
      } else if (!this.isValid) {
        this.$message.warning(
          "remove the wrong queen before putting another one on the board"
        );
        return;
      } else {
        cell.content = "Q";
      }
      try {
        const status = validateQueensStatus(this.chessBoardList);
        this.isValid = true;
        if (status === "success") {
          this.$message.success("Congratulations");
        }
      } catch (error) {
        this.$message.error(error.message);
        this.isValid = false;
      }
    },
    init() {
      this.chessBoardList = initChessBoardList();
      this.fetchUserInfo();
    },
    async fetchUserInfo() {
      try {
      const response = await this.$post("/jimmy", {});
      console.log(response);
      } catch (error) {
        this.$myNotify(error.message)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.eight-queen {
  padding: 16px;
  .chess-board {
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: 2px 2px 6px #b2b2b2;
    .row {
      display: flex;
      .cell {
        &.dark {
          background: black;
          color: white;
        }
        &.white {
          background: white;
          color: black;
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 16px;
    left: 16px;
    right: 16px;
  }
}
</style>
