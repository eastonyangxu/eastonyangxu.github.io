<style>
.flex-flex-output {
  display: flex;
  margin: 1rem;
  height: 7rem;
}
.flex-flex-item {
  height: 5rem;
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.3rem;
  padding: 1rem;
}
.flex-flex-item > span {
  display: flex;
  justify-content: right;
  color: #eee;
}
.flex-flex-select {
  width: 15rem;
}
.flex-flex-button {
  height: 2rem;
  padding: 0 1.5rem;
}
</style>

<template>
  <div>
    <div class="web-output">
      <div class="flex-flex-output">
        <div class="flex-flex-item item1" v-bind="computedItem1">
          item-1<span>flex:{{ item1 }}</span>
        </div>
        <div class="flex-flex-item item2" v-bind="computedItem2">
          item-2<span>flex:{{ item2 }}</span>
        </div>
        <div class="flex-flex-item item3" v-bind="computedItem3">
          item-3<span>flex:{{ item3 }}</span>
        </div>
      </div>
    </div>
    <div>
      <div>选择 flex 进行演示：</div>
      <label>item-1:</label>
      <el-select v-model="item1" placeholder="请选择" class="flex-flex-select">
        <el-option
          v-for="item in flexItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-2:</label>
      <el-select v-model="item2" placeholder="请选择" class="flex-flex-select">
        <el-option
          v-for="item in flexItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-3:</label>
      <el-select v-model="item3" placeholder="请选择" class="flex-flex-select">
        <el-option
          v-for="item in flexItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <el-button
        class="flex-flex-button"
        type="danger"
        plain
        @click="resetItems"
      >
        重置
      </el-button>
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex"
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
      item1: "initial",
      item2: "initial",
      item3: "initial",
      flexItems: [
        { value: "auto" },
        { value: "initial" },
        { value: "none" },
        { value: 1 },
        { value: "10rem" },
        { value: "1 1" },
        { value: "2 1" },
        { value: "1 10rem" },
        { value: "1 1 10rem" },
        { value: "0 1 20%" },
      ],
    };
  },
  computed: {
    computedItem1() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["flex"] = this.item1;
      return { ...newStyles };
    },
    computedItem2() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["flex"] = this.item2;
      return { ...newStyles };
    },
    computedItem3() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["flex"] = this.item3;
      return { ...newStyles };
    },
  },
  methods: {
    resetItems() {
      this.item1 = "initial";
      this.item2 = "initial";
      this.item3 = "initial";
    },
  },
};
</script>