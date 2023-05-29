<style>
.list-style-position {
  margin-left: 2rem;
}
.list-style-position > li {
  background-color: rgba(243, 174, 235, 0.3);
}
.list-style-position-items {
  margin-left: 1rem;
  width: 22rem;
}
</style>
<template>
  <div>
    <div class="web-output">
      <ul class="list-style-position" v-bind="computedListStyle">
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
        <el-radio :label="listStyle.label" class="list-style-position-items">
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
        { label: "outside", value: "标记盒在主块盒的外面(默认值)" },
        {
          label: "inside",
          value: "标记盒是主要块盒中的第一个行内盒，处于元素的内容流之后",
        },
      ],
      radioValue: "outside",
    };
  },
  computed: {
    computedListStyle() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style["list-style-position"] = this.radioValue;
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
      return "list-style-position: " + this.radioValue + ";";
    },
  },
  mounted() {
    setTimeout(() => {
      this.setCode();
    });
  },
};
</script>