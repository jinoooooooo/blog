<template>
  <div class="game_box">
    <iframe
      src="https://www.jsdaima.com/Uploads/js/201804/1523085687/index.html"
      width="100%"
      height="100%"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
export default {
   head() {
    return {
      title: "飞机小游戏 | Jinooo's blog",
    };
  },
}
</script>

<style scoped>
.game_box {
  position: relative;
  z-index: 100;
  height: calc(100vh - 6.2rem);
  padding-right: 0.5rem;
}
</style>