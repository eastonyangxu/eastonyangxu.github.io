<style>
.grid-gap-output {
  padding: 0.5rem;
  height: 14rem;
}
.grid-gap {
  display: grid;
  grid-template-columns: 4rem 6rem 4rem;
  grid-template-rows: 4rem 4rem 2rem;
}
.grid-gap-item {
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid-gap-button {
  height: 2rem;
  padding: 0 1.5rem;
}
.grid-gap-select {
  width: 25rem;
}
</style>
<template>
  <div>
    <div class="web-output">
      <div class="grid-gap-output">
        start
        <div v-bind="computedGrid" class="grid-gap">
          <div v-for="num in nums" :key="num" class="grid-gap-item">
            {{ num }}
          </div>
        </div>
        end
      </div>
    </div>
    <div>
      <span>gap:</span>
      <el-select v-model="gap" placeholder="请选择" class="grid-gap-select">
        <el-option
          v-for="item in gridGap"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button
        class="grid-gap-button"
        type="danger"
        plain
        @click="resetItems"
      >
        重置
      </el-button>
    </div>
    <div style="width: 100%">
      <div class="language-css line-numbers-mode">
        <pre class="language-css"><code ref="code"></code></pre>
      </div>
    </div>
  </div>
</template>
<script>
import Prism from "prismjs";
export default {
  data() {
    return {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      gridGap: [
        { value: "gap: 0.2rem;" },
        { value: "grid-gap: 0.2rem; gap: 0.2rem;" },
        { value: "grid-gap: 0.5rem;" },
        { value: "grid-gap: 0.5rem 0.2rem;" },
        { value: "grid-column-gap: 0.2rem;" },
        { value: "column-gap: 0.2rem;" },
        { value: "grid-row-gap: 0.2rem;" },
        { value: "row-gap: 0.2rem;" },
      ],
      gap: "",
    };
  },
  computed: {
    computedGrid() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style = this.gap;
      return { ...newStyles };
    },
  },
  watch: {
    gap: {
      handler: function (val) {
        this.setCode();
      },
      deep: true,
    },
  },
  methods: {
    setCode() {
      this.$refs["code"].innerHTML = Prism.highlight(
        this.updateHtml(),
        Prism.languages.html
      );
    },
    updateHtml() {
      var text = this.gap + "\n";
      return text;
    },
    resetItems() {
      // 重置所有
      Object.assign(this.$data, this.$options.data());
    },
  },
  mounted() {
    setTimeout(() => {
      this.setCode();
    });
  },
};
</script>

