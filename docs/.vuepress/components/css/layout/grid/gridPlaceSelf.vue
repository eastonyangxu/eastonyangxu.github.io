<style>
.grid-place-self-output {
  padding: 0.5rem;
  height: 18rem;
}
.grid-place-self {
  display: grid;
  grid-template-columns: repeat(3, 4rem);
  grid-template-rows: repeat(3, 4rem);
  gap: 0.5rem;
  border: 1px solid rgba(255, 0, 0, 0.6);
  height: 100%;
}
.grid-place-self-item {
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid-place-self-button {
  height: 2rem;
  padding: 0 1.5rem;
}
.grid-place-self-select {
  width: 8rem;
}
</style>
<template>
  <div>
    <div class="web-output">
      <div class="grid-place-self-output">
        <div class="grid-place-self" ref="gridPlaceItemsRef">
          <div class="grid-place-self-item" v-bind="item1">1</div>
          <div class="grid-place-self-item">2</div>
          <div class="grid-place-self-item">3</div>
          <div class="grid-place-self-item">4</div>
          <div class="grid-place-self-item">5</div>
          <div class="grid-place-self-item">6</div>
        </div>
      </div>
    </div>
    <div>
      <span>设置项目 item1 的属性：</span>
      <div>
        <span>place-self:</span>
        <el-select
          v-model="data.placeSelfValue"
          placeholder="请选择"
          class="grid-place-self-select"
        >
          <el-option
            v-for="item in gridPlaceSelfItems"
            :key="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <span>align-self:</span>
        <el-select
          v-model="data.alignSelfValue"
          placeholder="请选择"
          class="grid-place-self-select"
        >
          <el-option
            v-for="item in gridAlignSelfItems"
            :key="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <span>justify-self:</span>
        <el-select
          v-model="data.justifySelfValue"
          placeholder="请选择"
          class="grid-place-self-select"
        >
          <el-option
            v-for="item in gridJustifySelfItems"
            :key="item.value"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-button
          class="grid-place-self-button"
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
      gridPlaceSelfItems: [
        { value: "normal" },
        { value: "start" },
        { value: "end" },
        { value: "center" },
        { value: "stretch" },
        { value: "center end" },
        { value: "start end" },
        { value: "end center" },
      ],
      gridAlignSelfItems: [
        { value: "normal" },
        { value: "start" },
        { value: "end" },
        { value: "flex-start" },
        { value: "flex-end" },
        { value: "left" },
        { value: "right" },
        { value: "center" },
        { value: "stretch" },
        { value: "baseline" },
        { value: "safe start" },
        { value: "safe end" },
        { value: "unsafe start" },
        { value: "unsafe end" },
      ],
      gridJustifySelfItems: [
        { value: "normal" },
        { value: "start" },
        { value: "end" },
        { value: "flex-start" },
        { value: "flex-end" },
        { value: "left" },
        { value: "right" },
        { value: "center" },
        { value: "stretch" },
        { value: "baseline" },
        { value: "safe start" },
        { value: "safe end" },
        { value: "unsafe start" },
        { value: "unsafe end" },
      ],
      data: {
        placeSelfValue: "",
        alignSelfValue: "",
        justifySelfValue: "",
      },
      isBound: false,
    };
  },
  computed: {
    item1() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["place-self"] = this.data.placeSelfValue;
      newStyles.style["align-self"] = this.data.alignSelfValue;
      newStyles.style["justify-self"] = this.data.justifySelfValue;
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

