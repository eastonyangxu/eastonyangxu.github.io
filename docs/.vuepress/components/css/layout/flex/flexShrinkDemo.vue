<style>
.flex-shrink-output {
  display: flex;
  margin: 1rem;
  height: 7rem;
}
.flex-shrink-item {
  height: 5rem;
  width: 15rem;
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.3rem;
  padding: 1rem;
}
.flex-shrink-item > span {
  display: flex;
  justify-content: right;
  color: #eee;
}
.flex-shrink-select {
  width: 5rem;
}
.flex-shrink-button {
  height: 2rem;
  padding: 0 1.5rem;
}
</style>

<template>
  <div>
    <div class="web-output">
      <div class="flex-shrink-output">
        <div class="flex-shrink-item item1" v-bind="computedItem1">
          item-1<span>flex-shrink:{{ item1 }}</span>
        </div>
        <div class="flex-shrink-item item2" v-bind="computedItem2">
          item-2<span>flex-shrink:{{ item2 }}</span>
        </div>
        <div class="flex-shrink-item item3" v-bind="computedItem3">
          item-3<span>flex-shrink:{{ item3 }}</span>
        </div>
        <div class="flex-shrink-item item4" v-bind="computedItem4">
          item-4<span>flex-shrink:{{ item4 }}</span>
        </div>
        <div class="flex-shrink-item item5" v-bind="computedItem5">
          item-5<span>flex-shrink:{{ item5 }}</span>
        </div>
      </div>
    </div>
    <div>
      <div>选择 flex-shrink 进行尺寸调整：</div>
      <label>item-1:</label>
      <el-select
        v-model="item1"
        placeholder="请选择"
        class="flex-shrink-select"
      >
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-2:</label>
      <el-select
        v-model="item2"
        placeholder="请选择"
        class="flex-shrink-select"
      >
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-3:</label>
      <el-select
        v-model="item3"
        placeholder="请选择"
        class="flex-shrink-select"
      >
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-4:</label>
      <el-select
        v-model="item4"
        placeholder="请选择"
        class="flex-shrink-select"
      >
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <label>item-5:</label>
      <el-select
        v-model="item5"
        placeholder="请选择"
        class="flex-shrink-select"
      >
        <el-option
          v-for="item in orderItems"
          :key="item.value"
          :value="item.value"
          :label="item.value"
        >
        </el-option>
      </el-select>
      <el-button
        class="flex-shrink-button"
        type="danger"
        plain
        @click="resetItems"
      >
        重置
      </el-button>
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink"
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
      item1: 1,
      item2: 1,
      item3: 1,
      item4: 1,
      item5: 1,
      orderItems: [
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
      newStyles.style["flex-shrink"] = this.item1;
      return { ...newStyles };
    },
    computedItem2() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["flex-shrink"] = this.item2;
      return { ...newStyles };
    },
    computedItem3() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["flex-shrink"] = this.item3;
      return { ...newStyles };
    },
    computedItem4() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["flex-shrink"] = this.item4;
      return { ...newStyles };
    },
    computedItem5() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["flex-shrink"] = this.item5;
      return { ...newStyles };
    },
  },
  methods: {
    resetItems() {
      this.item1 = 1;
      this.item2 = 1;
      this.item3 = 1;
      this.item4 = 1;
      this.item5 = 1;
    },
  },
};
</script>