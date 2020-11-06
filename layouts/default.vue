<template>
  <!-- 顶部导航栏 -->
  <div class="box">
    <header class="default">
      <div class="nav-bar">
        <!-- 左侧logo -->
        <a href="" class="home-link">
          <img src="~static/images/logo.png" class="logo" alt="Jinooo's blog" />
          <span class="logo-title">Jinooo's blog</span>
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
    <div class="body-bg" :style="setBgimg"></div>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2178516_zfuds0mbolf.js ",
});
export default {
  components: {
    IconFont,
  },
  data() {
    return {
      //搜索
      keyword: null,
      //右上角导航菜单
      menuCurrent: [],
      //背景图片
      setBgimg: `background: url('../static/images/bg-imgs/bg-2.jpg') center center / cover no-repeat;`,
    };
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
.box .body-bg {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -999999;
  height: 100vh;
  width: 100vw;
  transition: background 0.5s;
}
</style>