<style>
.a-out {
  display: flex;
  align-items: center;
}
.a-show {
  font-size: 2rem;
  color: blueviolet;
}
.a-detail {
  width: 23rem;
  margin: auto 1rem;
}
.a-title {
  width: 8rem;
  display: inline-block;
}
.a-img {
  display: inline-block;
}
</style>

<template>
  <div>
    <div class="web-output a-out">
      <a href="/imgs/command.png" v-bind="computedLabels" ref="myA">
        <img src="/imgs/command.png" class="no-zoom" />
      </a>
      <span class="a-show">点击图片查看效果</span>
    </div>
    <div>
      <div>
        <span class="a-title">download属性：</span>
        <el-radio-group v-model="labels.download">
          <el-radio label="command.png">
            download属性，下载文件，这里填下载后的文件的名字
          </el-radio>
          <el-radio label="">取消</el-radio>
        </el-radio-group>
      </div>
      <div>
        <span class="a-title">target属性：</span>
        <el-radio-group v-model="labels.target" @click="unsetDownload()">
          <el-radio label="_self">_self(本窗口载入目标)</el-radio>
          <el-radio label="_blank">_blank(新窗口载入目标)</el-radio>
          <el-radio label="">默认(_self)</el-radio>
        </el-radio-group>
      </div>
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
      labels: {
        download: "",
        target: "",
      },
    };
  },
  computed: {
    computedLabels() {
      const { download, target, ...rest } = this.labels;
      const newLabels = {};
      if (download !== "") {
        newLabels.download = download;
      }
      if (target !== "") {
        newLabels.target = target;
      }
      return { ...newLabels, ...rest };
    },
  },
  watch: {
    // 如果有download属性，会直接调用下载，看不出来target属性的效果
    "labels.target"() {
      if (this.labels.target) {
        this.labels.download = "";
      }
      this.setCode();
    },
    "labels.download"() {
      if (this.labels.download) {
        this.labels.target = "";
      }
      this.setCode();
    },
  },
  methods: {
    setCode() {
      this.$nextTick(() => {
        this.$refs["code"].innerHTML = Prism.highlight(
          this.$refs.myA.outerHTML,
          Prism.languages.html
        );
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.setCode();
    });
  },
};
</script>