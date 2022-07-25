<template>
  <div class="main">
    <!-- 标题和简述 -->
    <div class="banner">
      <div class="banner-conent">
        <header class="title">
          <h1 class="h1-title">Jinooo's Blog</h1>
          <p class="desc-title">接受教训 知己后人</p>
        </header>
      </div>
    </div>
    <!-- 文章列表和侧边栏 -->
    <MainContent />
  </div>
</template>

<script>
import MainContent from "@/components/home/MainContent.vue";
export default {
  components: {
    MainContent,
  },
};
</script>

<style>
h1 {
  color: #fff;
}
.h1-title {
  animation: shake-it 0.5s reverse infinite
    cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
@keyframes shake-it {
  0% {
    text-shadow: 0 0 rgba(0, 255, 255, 0.5), 0 0 rgba(255, 0, 0, 0.5);
  }

  25% {
    text-shadow: -2px 0 rgba(0, 255, 255, 0.5), 2px 0 rgba(255, 0, 0, 0.5);
  }
  50% {
    text-shadow: -5px 0 rgba(0, 255, 255, 0.5), 3px 0 rgba(255, 0, 0, 0.5);
  }
  100% {
    text-shadow: 3px 0 rgba(0, 255, 255, 0.5), 5px 0 rgba(255, 0, 0, 0.5);
  }
}
.main .banner {
  width: 100%;
  min-height: 450px;
  /* color: #004050; */
  /* margin-top: 3.6rem; */
}
.main .banner-conent {
  padding-top: 7rem;
  max-width: 1100px;
  margin: 0 auto;
}
.main .title {
  text-align: center;
  margin-top: 3rem;
  color: #fff;
}
.main .h1-title {
  font-size: 3.2rem;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  letter-spacing: 1px;
  margin: 0;
}
.main .desc-title {
  max-width: 40rem;
  font-size: 1.2rem;
  line-height: 1.3;
  opacity: 0.9;
  margin: 1.5rem auto;
}
.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
}
</style>
