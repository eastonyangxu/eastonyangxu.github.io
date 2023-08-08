<style scoped>
.web-output {
  overflow-y: visible;
}
span {
  padding: 2rem;
  line-height: 2rem;
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
    </div>
    <div style="width: 100%">
      <div class="language-html line-numbers-mode">
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
        "<b>定义粗体文本</b>",
        "<big>定义大号字</big>",
        "<em>定义着重文字</em>",
        "<i>定义斜体字</i>",
        "<small>定义小号字</small>",
        "<strong>定义加重语气</strong>",
        "<sub>定义下标字</sub>",
        "<sup>定义上标字</sup>",
        "<ins>定义插入字</ins>",
        "<del>定义删除字</del>",
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
