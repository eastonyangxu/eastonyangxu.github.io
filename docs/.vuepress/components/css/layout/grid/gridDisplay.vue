<style>
.grid-display-web-output {
  padding: 0.5rem;
  height: 13rem;
}
.grid-display {
  grid-template-columns: 4rem 6rem 4rem;
  grid-template-rows: 4rem 4rem 2rem;
  grid-gap: 0.2rem;
}
.grid-display-item {
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
      <div class="grid-display-web-output">
        start
        <div v-bind="computedGrid" class="grid-display">
          <div v-for="num in nums" :key="num" class="grid-display-item">
            {{ num }}
          </div>
        </div>
        end
      </div>
    </div>
    <div>
      <el-radio-group v-model="gridDisplay">
        <el-radio label="grid">grid - 块级元素</el-radio>
        <el-radio label="inline-grid">inline-grid - 行内元素</el-radio>
      </el-radio-group>
    </div>
    <div style="width: 100%">
      <div class="language-css  line-numbers-mode">
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
      gridDisplay: "grid",
    };
  },
  computed: {
    computedGrid() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["display"] = this.gridDisplay;
      return { ...newStyles };
    },
  },
  watch: {
    gridDisplay: {
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
      var text = "display: " + this.gridDisplay + ";\n";
      text +=
        "grid-template-columns: 4rem 6rem 4rem;\ngrid-template-rows: 4rem 4rem 2rem; \ngrid-gap: 0.2rem;";
      return text;
    },
  },
  mounted() {
    setTimeout(() => {
      this.setCode();
    });
  },
};
</script>

