<style scoped>
h2 {
  /* 博客主题h2设置了下边框线，这里不需要该样式 */
  border-bottom: 0em;
}
.web-output {
  height: 22rem;
  padding: 0;
}
.title {
  margin: 1.5rem;
}
.line-numbers-mode {
  height: 17rem;
}
hr {
  border-width: 2px;
}
.check {
  margin-top: 0.7rem;
}
</style>

<template>
  <div>
    <div class="web-output">
      <h1 v-if="titleList.includes('h1')" class="title">{{ titleText.h1 }}</h1>
      <h2 v-if="titleList.includes('h2')" class="title">{{ titleText.h2 }}</h2>
      <h3 v-if="titleList.includes('h3')" class="title">{{ titleText.h3 }}</h3>
      <h4 v-if="titleList.includes('h4')" class="title">{{ titleText.h4 }}</h4>
      <h5 v-if="titleList.includes('h5')" class="title">{{ titleText.h5 }}</h5>
      <h6 v-if="titleList.includes('h6')" class="title">{{ titleText.h6 }}</h6>
      <hr v-if="titleList.includes('hr')" class="o-line-color" />
    </div>
    <div class="check">
      <el-checkbox-group v-model="titleList">
        <el-checkbox label="h1"></el-checkbox>
        <el-checkbox label="h2"></el-checkbox>
        <el-checkbox label="h3"></el-checkbox>
        <el-checkbox label="h4"></el-checkbox>
        <el-checkbox label="h5"></el-checkbox>
        <el-checkbox label="h6"></el-checkbox>
        <el-checkbox label="hr">水平线</el-checkbox>
      </el-checkbox-group>
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
      titleList: ["h1", "h2", "h3", "h4", "h5", "h6", "hr"],
      titleText: {
        h1: "这是h1标题",
        h2: "这是h2标题",
        h3: "这是h3标题",
        h4: "这是h4标题",
        h5: "这是h5标题",
        h6: "这是h6标题",
      },
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
      var text = "<!-- 这是注释，不会在上面显示 -->" + "\n";
      for (const title of this.titleList.sort()) {
        if (title === "hr") {
          text += `<${title}/>` + "\n";
        } else {
          text += `<${title}>${this.titleText[title]}</${title}>` + "\n";
        }
      }
      return text;
    },
  },
  watch: {
    titleList: function () {
      this.$nextTick(function () {
        this.setCode;
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.setCode;
    });
  },
};
</script>
