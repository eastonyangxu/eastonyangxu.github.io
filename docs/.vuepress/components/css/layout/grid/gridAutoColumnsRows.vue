<style>
.grid-auto-columns-rows-output {
  padding: 0.5rem;
  height: 20rem;
}
.grid-auto-columns-rows {
  display: grid;
  /* grid-template-columns: repeat(3, 4rem); */
  /* grid-template-rows: repeat(3, 4rem); */
  gap: 0.5rem;
  border: 1px solid rgba(255, 0, 0, 0.6);
  height: 100%;
}
.grid-auto-columns-rows-item {
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
#grid-auto-columns-rows-item1 {
  grid-column: 1/5;
}
#grid-auto-columns-rows-item2 {
  grid-column: 2/4;
}
#grid-auto-columns-rows-item9 {
  grid-row: 4/6;
  grid-column: 3/5;
}
.grid-auto-columns-rows-button {
  height: 2rem;
  padding: 0 1.5rem;
}
.grid-auto-columns-rows-select {
  width: 8rem;
}
</style>
<template>
  <div>
    <div class="web-output">
      <div class="grid-auto-columns-rows-output">
        <div
          v-bind="computedGrid"
          class="grid-auto-columns-rows"
          ref="gridPlaceItemsRef"
        >
          <div
            v-for="num in nums"
            :key="num"
            class="grid-auto-columns-rows-item"
            :id="gridPlaceContentItemId(num)"
          >
            {{ num }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <span>grid-auto-columns:</span>
      <el-select
        v-model="data.autoColumsValue"
        placeholder="请选择"
        class="grid-auto-columns-rows-select"
      >
        <el-option
          v-for="item in gridAlignItems"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>grid-auto-rows:</span>
      <el-select
        v-model="data.autoRowsValue"
        placeholder="请选择"
        class="grid-auto-columns-rows-select"
      >
        <el-option
          v-for="item in gridJustifyItems"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button
        class="grid-auto-columns-rows-button"
        type="danger"
        plain
        @click="resetItems"
      >
        重置
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      gridAlignItems: [
        { value: "1fr" },
        { value: "3rem" },
        { value: "20%" },
        { value: "min-content" },
        { value: "max-content" },
        { value: "minmax(5rem, auto)" },
        { value: "minmax(15rem, auto)" },
      ],
      gridJustifyItems: [
        { value: "1fr" },
        { value: "3rem" },
        { value: "10%" },
        { value: "min-content" },
        { value: "max-content" },
        { value: "minmax(3rem, auto)" },
        { value: "minmax(6rem, auto)" },
      ],
      data: {
        autoColumsValue: "",
        autoRowsValue: "",
      },
    };
  },
  computed: {
    computedGrid() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["grid-auto-columns"] = this.data.autoColumsValue;
      newStyles.style["grid-auto-rows"] = this.data.autoRowsValue;
      return { ...newStyles };
    },
  },
  methods: {
    resetItems() {
      // 重置所有
      Object.assign(this.$data, this.$options.data());
    },
    gridPlaceContentItemId(num) {
      return "grid-auto-columns-rows-item" + String(num);
    },
  },
  mounted() {},
};
</script>

