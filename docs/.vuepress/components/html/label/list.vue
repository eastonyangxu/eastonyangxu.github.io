<style>
.el-tabs__content {
  padding-left: 1rem;
  height: 9rem;
  overflow-y: auto;
}
</style>

<template>
  <div>
    <div class="web-output list-out">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="ul" label="无序列表">
          <ul ref="ul">
            <li>无序</li>
            <li>无序</li>
            <li>无序</li>
            <li>无序</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane name="ol" label="有序列表">
          <ol ref="ol">
            <li>有序</li>
            <li>有序</li>
            <li>有序</li>
            <li>有序</li>
          </ol>
        </el-tab-pane>
        <el-tab-pane name="dl" label="自定义列表">
          <dl ref="dl">
            <dt>自定义1</dt>
            <dt>自定义2</dt>
            <dd>自定义描述信息</dd>
            <dt>自定义3</dt>
          </dl>
        </el-tab-pane>
      </el-tabs>
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
      activeName: "ul",
    };
  },
  methods: {
    handleClick(tab, event) {
      this.setCode();
    },
    setCode() {
      this.$nextTick(() => {
        this.$refs["code"].innerHTML = Prism.highlight(
          this.$refs[this.activeName].outerHTML,
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