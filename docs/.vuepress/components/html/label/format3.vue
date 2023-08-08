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
      <!--  -->
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
        "<abbr>定义缩写或首字母缩略语</abbr>",
        "<acronym>定义首字母缩写</acronym>",
        "<address>定义文档作者或拥有者的联系信息</address>",
        "<bdo>定义文字方向</bdo>",
        "<blockquote>定义长的引用</blockquote>",
        "<q>定义短的引用语</q>",
        "<cite>定义著作的标题、引用、引证</cite>",
        "<dfn>定义项目或缩略词的定义</dfn>",
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
