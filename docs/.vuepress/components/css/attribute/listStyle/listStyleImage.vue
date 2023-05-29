<style>
.list-style-image {
  margin-left: 2rem;
}
.list-style-image-items {
  margin-left: 1rem;
  width: 22rem;
}
</style>
<template>
  <div>
    <div class="web-output">
      <ul
        class="list-style-image"
        style="list-style-image: url(/icons/outbond.svg)"
      >
        <li>Hello</li>
        <li>World</li>
        <li>What's up?</li>
      </ul>
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
    return {};
  },
  methods: {
    setCode() {
      this.$refs["code"].innerHTML = Prism.highlight(
        this.updateHtml(),
        Prism.languages.html
      );
    },
    updateHtml() {
      return "list-style-image: url(/icons/outbond.svg);";
    },
  },
  mounted() {
    setTimeout(() => {
      this.setCode();
    });
  },
};
</script>