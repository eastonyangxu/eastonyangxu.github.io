<style>
.grid-place-content-output {
  padding: 0.5rem;
  height: 18rem;
}
.grid-place-content {
  display: grid;
  grid-template-columns: repeat(3, 4rem);
  grid-template-rows: repeat(3, minmax(4rem, auto));
  gap: 0.5rem;
  border: 1px solid rgba(255, 0, 0, 0.6);
  height: 100%;
}
.grid-place-content-item {
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid-place-content-button {
  height: 2rem;
  padding: 0 1.5rem;
}
.grid-place-content-select {
  width: 8rem;
}
</style>
<template>
  <div>
    <div class="web-output">
      <div class="grid-place-content-output">
        <div
          v-bind="computedGrid"
          class="grid-place-content"
          ref="gridPlaceItemsRef"
        >
          <div
            v-for="num in nums"
            :key="num"
            class="grid-place-content-item"
            :id="gridPlaceContentItemId(num)"
          >
            {{ num }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <span>place-content:</span>
      <el-select
        v-model="data.placeItemsValue"
        placeholder="请选择"
        class="grid-place-content-select"
      >
        <el-option
          v-for="item in gridPlaceItems"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>align-content:</span>
      <el-select
        v-model="data.alignItemsValue"
        placeholder="请选择"
        class="grid-place-content-select"
      >
        <el-option
          v-for="item in gridAlignItems"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>justify-content:</span>
      <el-select
        v-model="data.justifyItemsValue"
        placeholder="请选择"
        class="grid-place-content-select"
      >
        <el-option
          v-for="item in gridJustifyItems"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button
        class="grid-place-content-button"
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
      gridPlaceItems: [
        { value: "normal" },
        { value: "start" },
        { value: "end" },
        { value: "center" },
        { value: "stretch" },
        { value: "space-between" },
        { value: "space-around" },
        { value: "space-evenly" },
        { value: "center end" },
        { value: "start end" },
        { value: "end center" },
        { value: "space-between center" },
      ],
      gridAlignItems: [
        { value: "normal" },
        { value: "start" },
        { value: "end" },
        { value: "flex-start" },
        { value: "flex-end" },
        { value: "center" },
        { value: "space-between" },
        { value: "space-around" },
        { value: "space-evenly" },
        { value: "stretch" },
        { value: "baseline" },
        { value: "safe start" },
        { value: "safe end" },
        { value: "unsafe start" },
        { value: "unsafe end" },
      ],
      gridJustifyItems: [
        { value: "normal" },
        { value: "start" },
        { value: "end" },
        { value: "flex-start" },
        { value: "flex-end" },
        { value: "left" },
        { value: "right" },
        { value: "center" },
        { value: "space-between" },
        { value: "space-around" },
        { value: "space-evenly" },
        { value: "stretch" },
      ],
      data: {
        placeItemsValue: "",
        alignItemsValue: "",
        justifyItemsValue: "",
      },
    };
  },
  computed: {
    computedGrid() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["place-content"] = this.data.placeItemsValue;
      newStyles.style["align-content"] = this.data.alignItemsValue;
      newStyles.style["justify-content"] = this.data.justifyItemsValue;
      return { ...newStyles };
    },
  },
  methods: {
    resetItems() {
      // 重置所有
      Object.assign(this.$data, this.$options.data());
    },
    gridPlaceContentItemId(num) {
      return "grid-place-content-item" + String(num);
    },
  },
  mounted() {},
};
</script>

