<style>
.justify-content-output {
  display: flex;
  margin: 1rem;
}
.justify-content-item {
  width: 5rem;
  height: 5rem;
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div>
    <div class="web-output">
      <div class="justify-content-output" v-bind="computedFlex">
        <div
          v-for="flexBlock in flexBlocks"
          :key="flexBlock"
          class="justify-content-item"
        >
          {{ flexBlock }}
        </div>
      </div>
    </div>
    <div>
      <label>justify-content:</label>
      <el-select v-model="flexItem" placeholder="请选择">
        <el-option
          v-for="item in flexItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content"
        target="_blank"
        class="outbond-example-a"
      >
        文档
        <img src="/icons/outbond.svg" class="outbond-svg" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flexBlocks: ["flex-1", "flex-2", "flex-3"],
      flexItems: [
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
      flexItem: "flex-start",
    };
  },
  computed: {
    computedFlex() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["justify-content"] = this.flexItem;
      return { ...newStyles };
    },
  },
};
</script>