<style>
.flex-basis-output {
  display: flex;
  margin: 1rem;
  height: 7rem;
}
.flex-basis-item {
  height: 5rem;
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.3rem;
  padding: 1rem;
}
.flex-basis-item > span {
  display: flex;
  justify-content: right;
  color: #eee;
}
.flex-basis-select {
  width: 7rem;
}
.flex-basis-button {
  height: 2rem;
  padding: 0 1.5rem;
}
</style>

<template>
  <div>
    <div class="web-output">
      <div class="flex-basis-output">
        <div class="flex-basis-item item1" v-bind="computedItem1">
          item-1<span>flex-basis:{{ item1 }}</span>
        </div>
        <div class="flex-basis-item item2" v-bind="computedItem2">
          item-2<span>flex-basis:{{ item2 }}</span>
        </div>
        <div class="flex-basis-item item3" v-bind="computedItem3">
          item-3<span>flex-basis:{{ item3 }}</span>
        </div>
        <div class="flex-basis-item item4" v-bind="computedItem4">
          item-4<span>flex-basis:{{ item4 }}</span>
        </div>
      </div>
    </div>
    <div>
      <div>选择 flex-basis 进行尺寸调整：</div>
      <label>item-1:</label>
      <el-select v-model="item1" placeholder="请选择" class="flex-basis-select">
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>width-1:</label>
      <el-select
        v-model="width1"
        placeholder="请选择"
        class="flex-basis-select"
      >
        <el-option
          v-for="item in widthValues"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-2:</label>
      <el-select v-model="item2" placeholder="请选择" class="flex-basis-select">
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-3:</label>
      <el-select v-model="item3" placeholder="请选择" class="flex-basis-select">
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-4:</label>
      <el-select v-model="item4" placeholder="请选择" class="flex-basis-select">
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <el-button
        class="flex-basis-button"
        type="danger"
        plain
        @click="resetItems"
      >
        重置
      </el-button>
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis"
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
      width1: "15rem",
      orderItems: [
        { value: "auto" },
        { value: "10rem" },
        { value: "20rem" },
        { value: "200px" },
        { value: "40rem" },
        { value: "25%" },
      ],
      widthValues: [
        { value: "10rem" },
        { value: "15rem" },
        { value: "20rem" },
        { value: "200px" },
        { value: "40rem" },
        { value: "400px" },
      ],
    };
  },
  computed: {
    computedItem1() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["flex-basis"] = this.item1;
      newStyles.style["width"] = this.width1;
      return { ...newStyles };
    },
    computedItem2() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["flex-basis"] = this.item2;
      return { ...newStyles };
    },
    computedItem3() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["flex-basis"] = this.item3;
      return { ...newStyles };
    },
    computedItem4() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["flex-basis"] = this.item4;
      return { ...newStyles };
    },
  },
  methods: {
    resetItems() {
      this.item1 = "auto";
      this.item2 = "auto";
      this.item3 = "auto";
      this.item4 = "auto";
      this.width1 = "15rem";
    },
  },
};
</script>