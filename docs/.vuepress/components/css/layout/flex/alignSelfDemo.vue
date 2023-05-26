<style>
.align-self-output {
  display: flex;
  margin: 1rem;
  height: 20rem;
  flex-wrap: wrap;
}
.align-self-item {
  width: 15rem;
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.3rem;
  padding: 1rem;
}
.align-self-item > span {
  display: flex;
  justify-content: right;
  color: #eee;
}
.align-self-select {
  width: 7rem;
}
.align-self-button {
  height: 2rem;
  padding: 0 1.5rem;
}
</style>

<template>
  <div>
    <div class="web-output">
      <div class="align-self-output">
        <div class="align-self-item item1" v-bind="computedItem1">
          item-1<span>align-self:{{ item1 }}</span>
        </div>
        <div class="align-self-item item2" v-bind="computedItem2">
          item-2<span>align-self:{{ item2 }}</span>
        </div>
        <div class="align-self-item item3" v-bind="computedItem3">
          item-3<span>align-self:{{ item3 }}</span>
        </div>
        <div class="align-self-item item4" v-bind="computedItem4">
          item-4<span>align-self:{{ item4 }}</span>
        </div>
        <div class="align-self-item item5" v-bind="computedItem5">
          item-5<span>align-self:{{ item5 }}</span>
        </div>
      </div>
    </div>
    <div>
      <div>选择 align-self 进行尺寸调整：</div>
      <label>item-1:</label>
      <el-select v-model="item1" placeholder="请选择" class="align-self-select">
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-2:</label>
      <el-select v-model="item2" placeholder="请选择" class="align-self-select">
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-3:</label>
      <el-select v-model="item3" placeholder="请选择" class="align-self-select">
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-4:</label>
      <el-select v-model="item4" placeholder="请选择" class="align-self-select">
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-5:</label>
      <el-select v-model="item5" placeholder="请选择" class="align-self-select">
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <el-button
        class="align-self-button"
        type="danger"
        plain
        @click="resetItems"
      >
        重置
      </el-button>
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self"
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
      item1: "auto",
      item2: "auto",
      item3: "auto",
      item4: "auto",
      item5: "auto",
      orderItems: [
        { value: "auto" },
        { value: "normal" },
        { value: "stretch" },
        { value: "flex-start" },
        { value: "flex-end" },
        { value: "self-start" },
        { value: "self-end" },
        { value: "center" },
        { value: "baseline" },
        { value: "first baseline" },
        { value: "last baseline" },
        { value: "safe flex-start" },
        { value: "safe flex-end" },
        { value: "unsafe flex-start" },
        { value: "unsafe flex-end" },
      ],
    };
  },
  computed: {
    computedItem1() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["align-self"] = this.item1;
      return { ...newStyles };
    },
    computedItem2() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["align-self"] = this.item2;
      return { ...newStyles };
    },
    computedItem3() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["align-self"] = this.item3;
      return { ...newStyles };
    },
    computedItem4() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["align-self"] = this.item4;
      return { ...newStyles };
    },
    computedItem5() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["align-self"] = this.item5;
      return { ...newStyles };
    },
  },
  methods: {
    resetItems() {
      this.item1 = "auto";
      this.item2 = "auto";
      this.item3 = "auto";
      this.item4 = "auto";
      this.item5 = "auto";
    },
  },
};
</script>