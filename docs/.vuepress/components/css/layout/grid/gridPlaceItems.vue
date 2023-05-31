<style>
.grid-place-items-output {
  padding: 0.5rem;
  height: 13rem;
}
.grid-place-items {
  display: grid;
  grid-template-columns: 4rem 4rem 4rem;
  grid-template-rows: 4rem 4rem 4rem;
  gap: 0.5rem;
}
.grid-place-items-item {
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid-place-items-button {
  height: 2rem;
  padding: 0 1.5rem;
}
.grid-place-items-select {
  width: 8rem;
}
</style>
<template>
  <div>
    <div class="web-output">
      <div class="grid-place-items-output">
        <div
          v-bind="computedGrid"
          class="grid-place-items"
          ref="gridPlaceItemsRef"
        >
          <div v-for="num in nums" :key="num" class="grid-place-items-item">
            {{ num }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <span>place-items:</span>
      <el-select
        v-model="data.placeItemsValue"
        placeholder="请选择"
        class="grid-place-items-select"
      >
        <el-option
          v-for="item in gridPlaceItems"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>align-items:</span>
      <el-select
        v-model="data.alignItemsValue"
        placeholder="请选择"
        class="grid-place-items-select"
      >
        <el-option
          v-for="item in gridAlignItems"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>justify-items:</span>
      <el-select
        v-model="data.justifyItemsValue"
        placeholder="请选择"
        class="grid-place-items-select"
      >
        <el-option
          v-for="item in gridJustifyItems"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button
        class="grid-place-items-button"
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
        { value: "start" },
        { value: "end" },
        { value: "center" },
        { value: "stretch" },
        { value: "center end" },
      ],
      gridAlignItems: [
        { value: "start" },
        { value: "end" },
        { value: "center" },
        { value: "stretch" },
      ],
      gridJustifyItems: [
        { value: "start" },
        { value: "end" },
        { value: "center" },
        { value: "stretch" },
      ],
      data: {
        placeItemsValue: "stretch",
        alignItemsValue: "stretch",
        justifyItemsValue: "stretch",
      },
    };
  },
  computed: {
    computedGrid() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["place-items"] = this.data.placeItemsValue;
      newStyles.style["align-items"] = this.data.alignItemsValue;
      newStyles.style["justify-items"] = this.data.justifyItemsValue;
      return { ...newStyles };
    },
  },
  methods: {
    resetItems() {
      // 重置所有
      Object.assign(this.$data, this.$options.data());
    },
  },
  mounted() {},
};
</script>

