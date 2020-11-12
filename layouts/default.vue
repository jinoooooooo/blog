<template>
  <!-- 顶部导航栏 -->
  <div class="box">
    <header class="default">
      <div class="nav-bar">
        <!-- 左侧logo -->
        <a href="" class="home-link">
          <img
            src="~/assets/images/logo.png"
            class="logo"
            alt="Jinooo's blog"
          />
          <span class="logo-title">Jinooo's Blog</span>
        </a>
        <!-- 右侧链接 -->
        <div class="links">
          <!-- 搜索框 -->
          <div class="search-input">
            <a-input ref="keyword-input" v-model="keyword">
              <a-icon slot="prefix" type="search" />
            </a-input>
          </div>
          <!-- 导航菜单  -->
          <nav class="nav-links">
            <a-menu v-model="menuCurrent" mode="horizontal">
              <a-menu-item key="home"> <a-icon type="home" />首页</a-menu-item>
              <a-menu-item key="check">
                <a-icon type="check" />分类</a-menu-item
              >
              <a-menu-item key="stop"> <a-icon type="stop" />归档</a-menu-item>
              <a-menu-item key="apple"
                ><a-icon type="apple" />生活随笔</a-menu-item
              >
              <a-menu-item key="api"> <a-icon type="api" />关于我</a-menu-item>
              <a-menu-item key="link"
                ><icon-font type="icon-gitee-fill-round" />Gitee</a-menu-item
              >
            </a-menu>
          </nav>
        </div>
      </div>
    </header>
    <Nuxt />
    <!-- 背景图片 -->
    <div :class="bodyBg"></div>
    <!-- 背景音乐 -->
    <div class="bgAudio">
      <audio id="audio" ref="audio" loop="loop" autoplay="autoplay">
        <source :src="abc" type="audio/mpeg" />
        您的浏览器不支持 audio 元素。
      </audio>
    </div>
  </div>
</template>

<script>
import ceshi from "file-loader!@/assets/audios/空匪 - Darling.mp3";
import logo from "@/static/images/logo.png";
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2178516_v8hz05it1qf.js ",
});
export default {
  components: {
    IconFont,
  },
  data() {
    return {
      alogo: logo,
      abc: ceshi,
      //搜索
      keyword: null,
      //右上角导航菜单
      menuCurrent: [],
      //当前背景图片
      current: 1,
      bodyBg: "bodyBg1",
      bodyBg1: "bodyBg1",
      bodyBg2: "bodyBg2",
      bodyBg3: "bodyBg3",
      bodyBg4: "bodyBg4",
      bodyBg5: "bodyBg5",
    };
  },
  created() {
    setInterval(() => {
      if (this.current != 5) {
        this.current++;
      } else {
        this.current = 1;
      }
      this.bodyBg = `bodyBg${this.current}`;
    }, 5000);
  },
};
</script>

<style scoped>
a {
  display: inline-block;
}
.default {
}
.nav-bar {
  opacity: 0.8;
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  height: 3.6rem;
  background-color: #fbfef6;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
}
.nav-bar .logo {
  height: 2.2rem;
  min-width: 2.2rem;
  margin-right: 0.8rem;
  vertical-align: top;
}
.nav-bar .logo-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #10323b;
}
.nav-bar .links {
  box-sizing: border-box;
  white-space: nowrap;
  font-size: 0.9rem;
  position: absolute;
  right: 1.5rem;
  top: 0.7rem;
  display: flex;
}
.nav-bar .nav-links {
  white-space: nowrap;
  font-size: 0.9rem;
}
.nav-bar .links .search-input {
  margin-right: 1rem;
}
.nav-bar .nav-links .ant-menu {
  background-color: #fbfef6;
  line-height: 34px;
  border-bottom: none;
}
.nav-bar .ant-menu-item,
.ant-menu-submenu-title {
  padding: 0 10px;
}
.box .bodyBg1 {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -999999;
  height: 100vh;
  width: 100vw;
  transition: background 3s ease 0.5s;
  background: url("../static/images/bg-imgs/bg-1.jpg") center center / cover
    no-repeat;
  opacity: 0.8;
}
.box .bodyBg2 {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -999999;
  height: 100vh;
  width: 100vw;
  transition: background 3s ease 0.5s;
  background: url("../static/images/bg-imgs/bg-2.jpg") center center / cover
    no-repeat;
  opacity: 0.8;
}
.box .bodyBg3 {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -999999;
  height: 100vh;
  width: 100vw;
  transition: background 3s ease 0.5s;
  background: url("../static/images/bg-imgs/bg-3.jpg") center center / cover
    no-repeat;
  opacity: 0.8;
}
.box .bodyBg4 {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -999999;
  height: 100vh;
  width: 100vw;
  transition: background 3s ease 0.5s;
  background: url("../static/images/bg-imgs/bg-4.jpg") center center / cover
    no-repeat;
  opacity: 0.8;
}
.box .bodyBg5 {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -999999;
  height: 100vh;
  width: 100vw;
  transition: background 3s ease 0.5s;
  background: url("../static/images/bg-imgs/bg-5.jpg") center center / cover
    no-repeat;
  opacity: 0.8;
}
</style>