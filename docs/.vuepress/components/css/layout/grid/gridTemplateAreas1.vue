<style>
.grid-template-areas1-output {
  padding: 0.5rem;
  height: 16rem;
}
#grid-template-areas1-page {
  display: grid; /* 1.设置 display 为 grid */
  width: 100%;
  height: 250px;
  grid-template-areas: "head head" "nav main" "nav foot"; /* 2.区域划分 当前为 三行 两列 */
  grid-template-rows: 50px 1fr 30px; /* 3.各区域 宽高设置 */
  grid-template-columns: 150px 1fr;
  color: #ff00ff;
}

#grid-template-areas1-page > header {
  grid-area: head; /* 4. 指定当前元素所在的区域位置，从 grid-template-areas 选取值 */
  background-color: #8ca0ff;
}

#grid-template-areas1-page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#grid-template-areas1-page > main {
  grid-area: main;
  background-color: #ffff64;
}

#grid-template-areas1-page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
</style>
<template>
  <div>
    <div class="web-output">
      <div class="grid-template-areas1-output">
        <section id="grid-template-areas1-page">
          <header>Header</header>
          <nav>Navigation</nav>
          <main>Main area</main>
          <footer>Footer</footer>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    computedGrid() {
      const newStyles = {};
      newStyles.style = {};
      newStyles.style = this.area;
      return { ...newStyles };
    },
  },
  methods: {
    resetItems() {
      // 重置所有
      Object.assign(this.$data, this.$options.data());
    },
  },
};
</script>

