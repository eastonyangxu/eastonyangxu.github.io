<style>
.list-style {
  margin-left: 2rem;
}
.list-style > li {
  background-color: rgba(243, 174, 235, 0.3);
}
.list-style-items {
  margin-left: 1rem;
  width: 22rem;
}
</style>
<template>
  <div>
    <div class="web-output">
      <ul class="list-style" v-bind="computedListStyle">
        List:
        <li>Hello</li>
        <li>World</li>
        <li>What's up?</li>
      </ul>
    </div>
    <div>
      <el-radio-group
        v-model="radioValue"
        v-for="listStyle in listStyles"
        :key="listStyle.label"
      >
        <el-radio :label="listStyle.label" class="list-style-items">
          {{ listStyle.label }}
        </el-radio>
      </el-radio-group>
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
      listStyles: [
        { label: "inside" },
        { label: "lower-roman" },
        { label: "url(/icons/outbond.svg)" },
        { label: "inside url(/icons/outbond.svg)" },
        { label: "url(/icons/outbond.svg) inside lower-roman" },
        { label: "inside lower-roman" },
      ],
      radioValue: "lower-roman",
    };
  },
  computed: {
    computedListStyle() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["list-style"] = this.radioValue;
      return { ...newStyles };
    },
  },
  watch: {
    radioValue: {
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
      return "list-style: " + this.radioValue + ";";
    },
  },
  mounted() {
    setTimeout(() => {
      this.setCode();
    });
  },
};
</script>