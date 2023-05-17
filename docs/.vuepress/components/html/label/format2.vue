<style scoped>
.web-output {
  overflow-y: visible;
}
span {
  margin: 2rem;
}
</style>

<template>
  <div>
    <div class="web-output">
      <span
        v-for="result in results"
        :key="result"
        v-html="result"
        class="o-line-color"
      ></span>
      <!--  -->
    </div>
    <div style="width: 100%">
      <div class="language-html -N line-numbers-mode">
        <pre class="language-html"><code ref="code"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  data() {
    return {
      results: [
        "<code>定义计算机代码</code>",
        "<kbd>定义键盘码</kbd>",
        "<samp>定义计算机代码样本</samp>",
        "<var>定义变量</var>",
        "<pre>定义预格式文本</pre>",
      ],
    };
  },
  computed: {
    setCode() {
      this.$refs["code"].innerHTML = Prism.highlight(
        this.updateHtml(),
        Prism.languages.html
      );
    },
  },
  methods: {
    updateHtml() {
      var text = "";
      for (const result of this.results) {
        text += `${result}` + "\n";
      }
      return text;
    },
  },
  mounted() {
    setTimeout(() => {
      this.setCode;
    });
  },
};
</script>
