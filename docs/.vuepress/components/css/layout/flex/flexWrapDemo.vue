<style>
.flex-wrap-output {
  display: flex;
  margin: 1rem;
  height: 13rem;
}
.flex-wrap-item {
  width: 15rem;
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
      <div class="flex-wrap-output" v-bind="computedFlex">
        <div
          v-for="flexBlock in flexBlocks"
          :key="flexBlock"
          class="flex-wrap-item"
        >
          {{ flexBlock }}
        </div>
      </div>
    </div>
    <div>
      <label>flex-wrap:</label>
      <el-select v-model="flexWrap" placeholder="请选择">
        <el-option
          v-for="item in flexWraps"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap"
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
      flexBlocks: ["flex-1", "flex-2", "flex-3", "flex-4"],
      flexWraps: [
        { value: "nowrap" },
        { value: "wrap" },
        { value: "wrap-reverse" },
      ],
      flexWrap: "nowrap",
    };
  },
  computed: {
    computedFlex() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["flex-wrap"] = this.flexWrap;
      return { ...newStyles };
    },
  },
};
</script>