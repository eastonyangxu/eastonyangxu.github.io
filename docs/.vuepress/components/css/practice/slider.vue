<style lang="scss">
#practice-slider-container {
  width: 20rem;
  margin: 0 auto;
}
#practice-slider-out {
  /* 滑块轨道 */
  position: relative;
  width: 20rem;
  height: 1rem;
  margin-top: 0.7rem;
  margin-left: 0px;
  border: 1px solid #28c561;
  border-radius: 0.7rem;
  box-shadow: 1px 1px 2px 0px inset; /* 轨道内阴影 */
  cursor: pointer;
}
#practice-slider-filling {
  /* 填充物 */
  height: 100%;
  margin-left: 0;
  width: 0;
  background: linear-gradient(to right, #0089ff, #00fff3); /* 填充效果的渐变 */
  background: -webkit-linear-gradient(left, #0089ff, #00fff3);
  background: -o-linear-gradient(right, #0089ff, #00fff3);
  background: -moz-linear-gradient(right, #0089ff, #00fff3);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  box-shadow: 2px -1px 5px 1px inset;
}
#practice-slider-innerimg {
  /* 滑块样式 */
  position: absolute;
  left: 0;
  top: -0.5rem;
  margin-left: 0;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  background-color: #66f40e;
  border-radius: 50%;
  box-shadow: 0 2px 1px 0 #0d11128a, 0px -1px 19px rgba(0, 0, 0, 0.9) inset; /* 使滑块具有3D感 */
}
</style>
<template>
  <div>
    <div class="web-output">
      <div>滑块</div>
      <div id="practice-slider-container">
        <div id="practice-slider-out">
          <div id="practice-slider-filling"></div>
          <div id="practice-slider-innerimg"></div>
        </div>
        <p id="practice-slider-txt">音量：0</p>
      </div>
    </div>
    <div style="width: 20rem; height: 5rem; margin: 0 auto">
      <css-practice-slider1 :value-fun="sliderVal" :min="0" :max="100" />
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
var innerpro = document.getElementById("innerimg");
var out = document.getElementById("out");
var filling = document.getElementById("filling");
var txt = document.getElementById("txt");
var target;
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    setCode() {
      this.refs["code"].innerHTML = Prism.highlight(
        this.updateHtml(),
        Prism.languages.html
      );
    },
    updateHtml() {
      var text = "";
      return text;
    },
    dvnamicprogress() {
      if (document.addEventListener) {
        out.addEventListener("click", this.fillingClick(), false);
      } else if (document.attachEvent) {
        out.attachEvent("click", this.fillingClick(), false);
      }
    },
    fillingClick() {},
    sliderVal(min, max, total) {},
  },
  mounted() {
    setTimeout(() => {
      this.setCode();
    });
  },
};
</script>