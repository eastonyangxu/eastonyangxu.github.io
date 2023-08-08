<style>
.grid-template-columns-rows-output {
  padding: 0.5rem;
  height: 20rem;
}
.grid-template-columns-rows {
  display: grid;
  grid-gap: 0.2rem;
}
.grid-template-columns-rows-item {
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid-template-columns-rows-button {
  height: 2rem;
  padding: 0 1.5rem;
}
</style>
<template>
  <div>
    <div class="web-output">
      <div class="grid-template-columns-rows-output">
        start
        <div v-bind="computedGrid" class="grid-template-columns-rows">
          <div
            v-for="num in nums"
            :key="num"
            class="grid-template-columns-rows-item"
          >
            {{ num }}
          </div>
        </div>
        end
      </div>
    </div>
    <div>
      <span>grid-template-columns:</span>
      <el-select
        v-model="gridTemplate.gridTemplateColumns"
        placeholder="请选择"
      >
        <el-option
          v-for="item in gridTemplateColumnsDatas"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>grid-template-rows:</span>
      <el-select v-model="gridTemplate.gridTemplateRows" placeholder="请选择">
        <el-option
          v-for="item in gridTemplateRowsDatas"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button
        class="grid-template-columns-rows-button"
        type="danger"
        plain
        @click="resetItems"
      >
        重置
      </el-button>
    </div>
    <div style="width: 100%">
      <div class="language-css line-numbers-mode">
        <pre class="language-css"><code ref="code"></code></pre>
      </div>
    </div>
  </div>
</template>
<script>
import Prism from "prismjs";
export default {
  data() {
    return {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      gridTemplateColumnsDatas: [
        { value: "4rem 6rem 4rem" },
        { value: "4rem 4rem 4rem" },
        { value: "70% 30%" },
        { value: "repeat(5, 1fr)" },
        { value: "repeat(2, 2rem 4rem 2rem)" },
        { value: "repeat(auto-fill, 8rem)" },
        { value: "1fr 2fr 10rem" },
        { value: "1fr 2fr minmax(15rem, 2fr)" },
        { value: "1fr auto 1fr" },
        { value: "[c1] 5rem [c2] 5rem [c3] auto [c4]" },
      ],
      gridTemplateRowsDatas: [
        { value: "4rem 4rem 2rem" },
        { value: "4rem 4rem 4rem" },
        { value: "repeat(2, 20%)" },
        { value: "repeat(2, 1fr)" },
        { value: "1fr auto 2fr" },
        { value: "[r1] 5rem [r2] 5rem [r3] auto [r4]" },
      ],
      gridTemplate: {
        gridTemplateColumns: "4rem 6rem 4rem",
        gridTemplateRows: "4rem 4rem 2rem",
      },
    };
  },
  computed: {
    computedGrid() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["grid-template-columns"] =
        this.gridTemplate.gridTemplateColumns;
      newStyles.style["grid-template-rows"] =
        this.gridTemplate.gridTemplateRows;
      return { ...newStyles };
    },
  },
  watch: {
    gridTemplate: {
      handler: function (val) {
        this.setCode();
      },
      deep: true,
    },
  },
  methods: {
    setCode() {
      this.$refs["code"].innerHTML = Prism.highlight(
        this.updateHtml(),
        Prism.languages.html
      );
    },
    updateHtml() {
      var text = "display: grid;\n";
      text += "grid-gap: 0.2rem;\n";
      text +=
        "grid-template-columns: " +
        this.gridTemplate.gridTemplateColumns +
        ";\n";
      text +=
        "grid-template-rows: " + this.gridTemplate.gridTemplateRows + ";\n";
      return text;
    },
    resetItems() {
      // 重置所有
      Object.assign(this.$data, this.$options.data());
    },
  },
  mounted() {
    setTimeout(() => {
      this.setCode();
    });
  },
};
</script>

