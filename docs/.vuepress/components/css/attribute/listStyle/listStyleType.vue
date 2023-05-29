<style>
.list-style-type {
  margin-left: 2rem;
}
.list-style-type-items {
  margin-left: 1rem;
  width: 22rem;
}
</style>
<template>
  <div>
    <div class="web-output">
      <ul class="list-style-type" v-bind="computedListStyle">
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
        <el-radio :label="listStyle.label" class="list-style-type-items">
          {{ listStyle.label }} - {{ listStyle.value }}
        </el-radio>
      </el-radio-group>
    </div>
    <div style="width: 100%">
      <div class="language-css -N line-numbers-mode">
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
        { label: "disc", value: "实心圆点 (默认值)" },
        { label: "circle", value: "空心圆点" },
        { label: "square", value: "实心方块" },
        { label: "decimal", value: "十进制阿拉伯数字" },
        { label: "decimal-leading-zero", value: "用初始零填充的十进制数" },
        { label: "simp-chinese-informal", value: "简体中文非正式编号" },
        { label: "trad-chinese-informal", value: "传统中文非正式编号" },
        { label: "trad-chinese-formal", value: "繁体中文正式编号" },
        { label: "lower-alpha", value: "小写ASCII字母" },
        { label: "lower-latin", value: "小写ASCII字母（IE7 以下不支持）" },
        { label: "upper-alpha", value: "大写ASCII字母" },
        { label: "upper-latin", value: "大写ASCII字母（IE7 以下不支持）" },
        { label: "lower-roman", value: "小写罗马数字" },
        { label: "upper-roman", value: "大写罗马数字" },
        { label: "lower-greek", value: "小写古希腊数字" },
        { label: "armenian", value: "亚美尼亚传统编号" },
        { label: "cjk-decimal", value: "中日韩十进制数" },
        { label: "japanese-informal", value: "日文非正式编号" },
      ],
      radioValue: "disc",
    };
  },
  computed: {
    computedListStyle() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["list-style-type"] = this.radioValue;
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
      return "list-style-type: " + this.radioValue + ";";
    },
  },
  mounted() {
    setTimeout(() => {
      this.setCode();
    });
  },
};
</script>