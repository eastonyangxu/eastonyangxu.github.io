<style>
.flex-output {
  display: flex;
  margin: 1rem;
  min-height: 20rem;
}
.flex-output div {
  border: 0px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
}
#flex-in1 {
  width: 10rem;
  height: 5rem;
  background-color: #663399;
}
#flex-in2 {
  width: 10rem;
  height: 6rem;
  background-color: #4169e1;
}
#flex-in3 {
  width: 18rem;
  height: 8rem;
  background-color: #e73ebd;
}
#flex-in4 {
  width: 12rem;
  height: 5rem;
  background-color: #37cee2;
}
#flex-in5 {
  width: 7rem;
  height: 7rem;
  background-color: #07456f;
}
.select-flex-lable {
  display: inline-block;
  width: 9em;
}
</style>

<template>
  <div>
    <div class="web-output">
      <div class="flex-output" v-bind="computedFlex">
        <div id="flex-in1">flex-1</div>
        <div id="flex-in2">flex-2</div>
        <div id="flex-in3">flex-3</div>
        <div id="flex-in4">flex-4</div>
        <div id="flex-in5">flex-5</div>
      </div>
    </div>
    <div>
      <div>
        <label class="select-flex-lable">flex-direction:</label>
        <el-radio-group v-model="flexGroup.flexDirection">
          <el-radio label="row"></el-radio>
          <el-radio label="row-reverse"></el-radio>
          <el-radio label="column"></el-radio>
          <el-radio label="column-reverse"></el-radio>
        </el-radio-group>
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction"
          target="_blank"
          class="outbond-example-a"
        >
          文档
          <img src="/icons/outbond.svg" class="outbond-svg" />
        </a>
      </div>
      <div>
        <label class="select-flex-lable"> flex-wrap: </label>
        <el-radio-group v-model="flexGroup.flexWrap">
          <el-radio label="nowrap"></el-radio>
          <el-radio label="wrap"></el-radio>
          <el-radio label="wrap-reverse"></el-radio>
        </el-radio-group>
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap"
          target="_blank"
          class="outbond-example-a"
        >
          文档
          <img src="/icons/outbond.svg" class="outbond-svg" />
        </a>
      </div>
      <div>
        <label class="select-flex-lable">
          justify-content:
          <el-tooltip placement="top">
            <div slot="content" v-html="justifyContentInfo"></div>
            <i class="el-icon-info"></i>
          </el-tooltip>
        </label>
        <el-radio-group v-model="flexGroup.justifyContent">
          <el-radio label="flex-start"></el-radio>
          <el-radio label="flex-end"></el-radio>
          <el-radio label="center"></el-radio>
          <el-radio label="space-between"></el-radio>
          <el-radio label="space-around"></el-radio>
        </el-radio-group>
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content"
          target="_blank"
          class="outbond-example-a"
        >
          文档
          <img src="/icons/outbond.svg" class="outbond-svg" />
        </a>
      </div>
      <div>
        <label class="select-flex-lable">align-items:</label>
        <el-radio-group v-model="flexGroup.alignItems">
          <el-radio label="flex-start"></el-radio>
          <el-radio label="flex-end"></el-radio>
          <el-radio label="center"></el-radio>
          <el-radio label="baseline"></el-radio>
          <el-radio label="stretch"></el-radio>
        </el-radio-group>
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items"
          target="_blank"
          class="outbond-example-a"
        >
          文档
          <img src="/icons/outbond.svg" class="outbond-svg" />
        </a>
      </div>
      <div>
        <label class="select-flex-lable">
          align-content:
          <el-tooltip placement="top">
            <div slot="content" v-html="alignContentInfo"></div>
            <i class="el-icon-info"></i>
          </el-tooltip>
        </label>
        <el-radio-group v-model="flexGroup.alignContent">
          <el-radio label="flex-start"></el-radio>
          <el-radio label="flex-end"></el-radio>
          <el-radio label="center"></el-radio>
          <el-radio label="space-between"></el-radio>
          <el-radio label="space-around"></el-radio>
        </el-radio-group>
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content"
          target="_blank"
          class="outbond-example-a"
        >
          文档
          <img src="/icons/outbond.svg" class="outbond-svg" />
        </a>
      </div>
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
      flexGroup: {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "flex-start",
      },
      justifyContentInfo:
        "因为已经挤满一行看不出效果<br/>所以需要结合<strong style='color: #b160ea'>flex-wrap: wrap</strong>查看效果。",
      alignContentInfo:
        "该属性只针对子容器多行排列时<br/>所以需要结合<strong style='color: #b160ea'>flex-wrap: wrap</strong>查看效果。",
      flexGroupMapping: {
        flexDirection: "flex-direction",
        flexWrap: "flex-wrap",
        justifyContent: "justify-content",
        alignItems: "align-items",
        alignContent: "align-content",
      },
    };
  },
  computed: {
    computedFlex() {
      const {
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
      } = this.flexGroup;
      const newStyles = {};
      newStyles.style = {};
      if (flexDirection !== "") {
      }
      newStyles.style["flex-direction"] = flexDirection;
      newStyles.style["flex-wrap"] = flexWrap;
      newStyles.style["justify-content"] = justifyContent;
      newStyles.style["align-items"] = alignItems;
      newStyles.style["align-content"] = alignContent;
      return { ...newStyles };
    },
  },
  watch: {
    flexGroup: {
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
      let text = "";
      for (let key in this.flexGroup) {
        let value = this.flexGroup[key];
        text += `${this.flexGroupMapping[key]}: ${value};` + "\n";
      }
      return text;
    },
  },
  mounted() {
    setTimeout(() => {
      this.setCode();
    });
  },
};
</script>