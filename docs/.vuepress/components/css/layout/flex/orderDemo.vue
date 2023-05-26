<style>
.flex-order-output {
  display: flex;
  margin: 1rem;
  height: 18rem;
  flex-wrap: wrap;
}
.flex-order-item {
  width: 15rem;
  height: 5rem;
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.5rem;
  padding: 1rem;
}
.flex-order-item > span {
  display: flex;
  align-items: end;
  justify-content: right;
  color: #eee;
}
.order-select {
  width: 5rem;
}
.order-button {
  height: 2rem;
  padding: 0 1.5rem;
}
</style>

<template>
  <div>
    <div class="web-output">
      <div class="flex-order-output">
        <div class="flex-order-item item1" v-bind="computedItem1">
          item-1<span>order:{{ item1 }}</span>
        </div>
        <div class="flex-order-item item2" v-bind="computedItem2">
          item-2<span>order:{{ item2 }}</span>
        </div>
        <div class="flex-order-item item3" v-bind="computedItem3">
          item-3<span>order:{{ item3 }}</span>
        </div>
        <div class="flex-order-item item4" v-bind="computedItem4">
          item-4<span>order:{{ item4 }}</span>
        </div>
        <div class="flex-order-item item5" v-bind="computedItem5">
          item-5<span>order:{{ item5 }}</span>
        </div>
      </div>
    </div>
    <div>
      <div>选择 order 进行排序：</div>
      <label>item-1:</label>
      <el-select v-model="item1" placeholder="请选择" class="order-select">
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-2:</label>
      <el-select v-model="item2" placeholder="请选择" class="order-select">
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-3:</label>
      <el-select v-model="item3" placeholder="请选择" class="order-select">
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-4:</label>
      <el-select v-model="item4" placeholder="请选择" class="order-select">
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-5:</label>
      <el-select v-model="item5" placeholder="请选择" class="order-select">
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <el-button class="order-button" type="danger" plain @click="resetItems">
        重置
      </el-button>
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/order"
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
      item1: 0,
      item2: 0,
      item3: 0,
      item4: 0,
      item5: 0,
      orderItems: [
        { value: -2 },
        { value: -1 },
        { value: 0 },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
      ],
    };
  },
  computed: {
    computedItem1() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["order"] = this.item1;
      return { ...newStyles };
    },
    computedItem2() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["order"] = this.item2;
      return { ...newStyles };
    },
    computedItem3() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["order"] = this.item3;
      return { ...newStyles };
    },
    computedItem4() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["order"] = this.item4;
      return { ...newStyles };
    },
    computedItem5() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["order"] = this.item5;
      return { ...newStyles };
    },
  },
  methods: {
    resetItems() {
      this.item1 = 0;
      this.item2 = 0;
      this.item3 = 0;
      this.item4 = 0;
      this.item5 = 0;
    },
  },
};
</script>