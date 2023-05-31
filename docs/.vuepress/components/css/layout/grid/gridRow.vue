<style>
.grid-row-output {
  padding: 0.5rem;
  height: 18rem;
}
.grid-row {
  display: grid;
  grid-template-columns: repeat(3, 4rem);
  grid-template-rows: repeat(3, 4rem);
  gap: 0.5rem;
  border: 1px solid rgba(255, 0, 0, 0.6);
  height: 100%;
}
.grid-row-item {
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid-row-button {
  height: 2rem;
  padding: 0 1.5rem;
}
.grid-row-select {
  width: 8rem;
}
</style>
<template>
  <div>
    <div class="web-output">
      <div class="grid-row-output">
        <div class="grid-row" ref="gridPlaceItemsRef">
          <div class="grid-row-item" v-bind="item1">1</div>
          <div class="grid-row-item">2</div>
          <div class="grid-row-item">3</div>
          <div class="grid-row-item">4</div>
          <div class="grid-row-item">5</div>
          <div class="grid-row-item">6</div>
        </div>
      </div>
    </div>
    <div>
      <span>设置项目 item1 的属性：</span>
      <div>
        <span>grid-row:</span>
        <el-select
          v-model="data.columnValue"
          placeholder="请选择"
          class="grid-row-select"
        >
          <el-option
            v-for="item in gridColumnItems"
            :key="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <span>grid-row-start:</span>
        <el-select
          v-model="data.columnStartValue"
          placeholder="请选择"
          class="grid-row-select"
        >
          <el-option
            v-for="item in gridColumnStartItems"
            :key="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <span>grid-row-end:</span>
        <el-select
          v-model="data.columnEndValue"
          placeholder="请选择"
          class="grid-row-select"
        >
          <el-option
            v-for="item in gridColumnEndItems"
            :key="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-button
          class="grid-row-button"
          type="danger"
          plain
          @click="resetItems"
        >
          重置
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gridColumnItems: [
        { value: "1/2" },
        { value: "1/3" },
        { value: "1/span 3" },
        { value: "3" },
        { value: "1/5" },
        { value: "2/4" },
        { value: "4/2" },
      ],
      gridColumnStartItems: [
        { value: "1" },
        { value: "2" },
        { value: "3" },
        { value: "4" },
      ],
      gridColumnEndItems: [
        { value: "1" },
        { value: "2" },
        { value: "3" },
        { value: "4" },
      ],
      data: {
        columnValue: "",
        columnStartValue: "",
        columnEndValue: "",
      },
      isBound: false,
    };
  },
  computed: {
    item1() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["grid-row"] = this.data.columnValue;
      newStyles.style["grid-row-start"] = this.data.columnStartValue;
      newStyles.style["grid-row-end"] = this.data.columnEndValue;
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

