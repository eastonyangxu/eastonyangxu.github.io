<style lang="css" scoped>
.web-output {
  height: 8rem;
  padding: 0;
}
p {
  margin: 0.1rem 1rem;
}
#new-data {
  width: 100%;
}
.inputForm {
  margin-top: 1rem;
}
.line-numbers-mode {
  height: 9.2rem;
  overflow-y: auto;
}
</style>

<template>
  <div>
    <div class="web-output">
      <p v-html="p1"></p>
      <p v-for="result in results" :key="result" v-html="result"></p>
    </div>
    <div class="inputForm">
      <el-form status-icon id="new-data">
        <el-form-item>
          <el-input
            type="textarea"
            v-model="newData"
            maxlength="100"
            show-word-limit
            placeholder="输入需要新增的段落，支持html语法"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onAdd">新增</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
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
      p1: "这是一个段落。<br/>我换行咯。",
      newData: "",
      results: [],
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
    onAdd() {
      this.results.push(this.newData);
      this.newData = "";
      this.setCode;
    },
    onReset() {
      this.results = [];
      this.setCode;
    },
    updateHtml() {
      var text = `<p>${this.p1}</p>` + "\n";
      for (const result of this.results) {
        if (result === "") {
          continue;
        }
        text += `<p>${result.replace(/\n/g, " ")}</p>` + "\n";
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