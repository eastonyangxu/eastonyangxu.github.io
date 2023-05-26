<style>
.align-items-output {
  display: flex;
  margin: 1rem;
  height: 10rem;
}
.align-items-item {
  width: 10rem;
  /* height: 5rem; */
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.align-items-item.item1 {
  font-size: 2rem;
  min-height: 4rem;
}
.align-items-item.item3 {
  font-size: 2.5rem;
  min-height: 6rem;
}
</style>

<template>
  <div>
    <div class="web-output">
      <div class="align-items-output" v-bind="computedFlex">
        <div class="align-items-item item1">item-1</div>
        <div class="align-items-item item2">item-2</div>
        <div class="align-items-item item3">item-3</div>
      </div>
    </div>
    <div>
      <label>align-items:</label>
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
        href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items"
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
      flexItems: [
        { value: "normal" },
        { value: "start" },
        { value: "end" },
        { value: "flex-start" },
        { value: "flex-end" },
        { value: "self-start" },
        { value: "self-end" },
        { value: "center" },
        { value: "stretch" },
        { value: "baseline" },
        { value: "first baseline" },
        { value: "last baseline" },
        { value: "safe flex-start" },
        { value: "safe flex-end" },
        { value: "unsafe flex-start" },
        { value: "unsafe flex-end" },
      ],
      flexItem: "center",
    };
  },
  computed: {
    computedFlex() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["align-items"] = this.flexItem;
      return { ...newStyles };
    },
  },
};
</script>