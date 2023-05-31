<style>
.grid-auto-flow-output {
  padding: 0.5rem;
  height: 18rem;
}
.grid-auto-flow {
  display: grid;
  grid-template-columns: 4rem 4rem 4rem;
  grid-template-rows: 4rem 4rem 4rem;
  gap: 0.5rem;
}
.grid-auto-flow-item {
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid-auto-flow-button {
  height: 2rem;
  padding: 0 1.5rem;
}
.grid-auto-flow-select {
  width: 10rem;
}
</style>
<template>
  <div>
    <div class="web-output">
      <div class="grid-auto-flow-output">
        <div v-bind="computedGrid" class="grid-auto-flow">
          <div v-bind="computedGridItem1" class="grid-auto-flow-item">1</div>
          <div v-for="num in nums" :key="num" class="grid-auto-flow-item">
            {{ num }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <span>grid-auto-flow:</span>
      <el-select
        v-model="data.gridAutoFlow"
        placeholder="请选择"
        class="grid-auto-flow-select"
      >
        <el-option
          v-for="item in gridAutoFlows"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>item1:</span>
      <el-select
        v-model="data.item1Value"
        placeholder="请选择"
        class="grid-auto-flow-select"
      >
        <el-option
          v-for="item in item1Values"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button
        class="grid-auto-flow-button"
        type="danger"
        plain
        @click="resetItems"
      >
        重置
      </el-button>
    </div>
    <div style="width: 100%">
      <div class="language-css -N line-numbers-mode">
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
      nums: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      gridAutoFlows: [
        { value: "row" },
        { value: "column" },
        { value: "dense" },
        { value: "row dense" },
        { value: "column dense" },
      ],
      item1Values: [
        { value: "grid-row-start: 2;" },
        { value: "grid-row-start: 2; grid-row-end: 5;" },
        { value: "grid-column-start: 2;" },
        { value: "grid-column-start: 2; grid-column-end: 4;" },
      ],
      data: {
        gridAutoFlow: "row",
        item1Value: "",
      },
    };
  },
  computed: {
    computedGrid() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["grid-auto-flow"] = this.data.gridAutoFlow;
      return { ...newStyles };
    },
    computedGridItem1() {
      const newStyles = {};
      newStyles.style = {};
      if (this.data.item1Value) {
        newStyles.style = this.data.item1Value;
      }
      return { ...newStyles };
    },
  },
  watch: {
    data: {
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
      var text = "grid-auto-flow: " + this.data.gridAutoFlow + ";\n";
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

