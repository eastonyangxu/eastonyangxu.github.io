<template>
  <div id="gist"></div>
</template>

<script>
/* eslint-disable no-useless-escape */
// import postscribe from "postscribe"; //打包会报错，先注释掉 TODO待修复
export default {
  mounted: function () {
    postscribe(
      "#gist",
      `<script src="https://gist.github.com/eastonyangxu/a878dcda4b6a0b892039e4458d69ad20.js"><\/script>`
    );
  },
};
</script>
