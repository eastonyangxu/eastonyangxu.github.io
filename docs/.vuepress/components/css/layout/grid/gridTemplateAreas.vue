<style>
.grid-template-areas-output {
  padding: 0.5rem;
  height: 9rem;
}
.grid-template-areas {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
  grid-gap: 0.5rem;
}
.grid-template-areas-item {
  border: 0 solid;
  background: linear-gradient(-45deg, #b160ea, #d7b1e8);
  color: #065447;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid-template-areas-item1 {
  grid-area: a;
}
.grid-template-areas-item2 {
  grid-area: b;
}
.grid-template-areas-item3 {
  grid-area: c;
}
.grid-template-areas-button {
  height: 2rem;
  padding: 0 1.5rem;
}
.grid-template-areas-select {
  width: 25rem;
}
</style>
<template>
  <div>
    <div class="web-output">
      <div class="grid-template-areas-output">
        <div v-bind="computedGrid" class="grid-template-areas">
          <div class="grid-template-areas-item grid-template-areas-item1">
            One (a)
          </div>
          <div class="grid-template-areas-item grid-template-areas-item2">
            Two (b)
          </div>
          <div class="grid-template-areas-item grid-template-areas-item3">
            Three (c)
          </div>
        </div>
      </div>
    </div>
    <div>
      <span>areas:</span>
      <el-select
        v-model="area"
        placeholder="请选择"
        class="grid-template-areas-select"
      >
        <el-option
          v-for="item in gridTemplateAreas"
          :key="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button
        class="grid-template-areas-button"
        type="danger"
        plain
        @click="resetItems"
      >
        重置
      </el-button>
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-areas"
        target="_blank"
        class="outbond-example-a"
      >
        文档
        <img src="/icons/outbond.svg" class="outbond-svg" />
      </a>
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
      gridTemplateAreas: [
        { value: 'grid-template-areas: "a a a" "b c c" "b c c";' },
        { value: 'grid-template-areas: "b b a" "b b c" "b b c";' },
        { value: 'grid-template-areas: "a a . " "a a ." ". b c ";' },
      ],
      area: 'grid-template-areas: "a a a" "b c c" "b c c";',
    };
  },
  computed: {
    computedGrid() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style = this.area;
      return { ...newStyles };
    },
  },
  watch: {
    area: {
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
      var text = this.area + "\n";
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

