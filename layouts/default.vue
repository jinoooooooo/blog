<template>
  <!-- 顶部导航栏 -->
  <div class="box">
    <header class="default">
      <div class="nav-bar">
        <!-- 左侧logo -->
        <a href="" class="home-link">
          <img
            src="http://8.131.96.6/blog/images/logo.png"
            class="logo"
            alt="Jinooo's blog"
          />
          <!-- <span class="logo-title">Jinooo's Blog</span> -->
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
            <a-menu v-model="menuCurrent" mode="horizontal" @click="changeMenu">
              <a-menu-item key="home">
                <NLink to="/">首页</NLink>
              </a-menu-item>
              <a-menu-item key="file">
                <NLink to="/file">归档</NLink>
              </a-menu-item>
              <!--    <a-menu-item key="stop"><nuxt-link>分类</nuxt-link> </a-menu-item>
              <a-menu-item key="apple"> <nuxt-link>生活随笔</nuxt-link> </a-menu-item>
              <a-menu-item key="api"><nuxt-link>关于我</nuxt-link> </a-menu-item> -->
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
      <audio id="audio" ref="audio" loop autoplay="autoplay">
        <source
          src="http://8.131.96.6/blog/audios/%E7%A9%BA%E5%8C%AA%20-%20Darling.mp3"
          type="audio/mpeg"
        />
        您的浏览器不支持 audio 元素。
      </audio>
      <a-tooltip>
        <template slot="title"> 空匪 - Darling </template>
        <icon-font
          class="rotate"
          type="icon-music"
          @click="isBgAudio"
          :style="{ animationPlayState: audioState ? 'paused' : 'running' }"
        />
      </a-tooltip>
    </div>
    <!-- 回到顶部 -->
    <div>
      <a-back-top :visibilityHeight="1000" />
    </div>
    <!-- 背景泡泡 -->
    <background ref="background" />
    <!--  -->
  </div>
</template>

<script>
import background from "@/components/home/Background";
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2178516_y9pqs80oit.js",
});
export default {
  components: {
    IconFont,
    background,
  },
  data() {
    return {
      audioState: true,
      //搜索
      keyword: null,
      //右上角导航菜单
      menuCurrent: [],
      //当前背景图片
      current: 0,
      bodyBg: "bodyBg1",
      bodyBg1: "bodyBg1",
      bodyBg2: "bodyBg2",
      bodyBg3: "bodyBg3",
      bodyBg4: "bodyBg4",
      bodyBg5: "bodyBg5",
      //背景定时器对象
      bgInterval: null,
    };
  },
  created() {
    this.getBgBanner();
  },
  mounted() {
    //定时轮换背景图
    this.bgInterval = setInterval(this.getBgBanner, 7000);
    //获取背景音乐状态
    this.audioState = this.$refs.audio.paused;
    console.log("this.audioState---->", this.audioState);
  },
  beforeDestroy() {
    //清除背景轮换定时器
    clearInterval(this.bgInterval);
    this.bgInterval = null;
  },
  methods: {
    //顶部菜单跳转
    changeMenu(item) {
      switch (item.key) {
        case "home":
          break;
        case "file":
          break;
      }
    },
    //点击右下角music logo暂停或播放背景音乐
    isBgAudio() {
      if (this.audioState) {
        this.playBGM();
      } else {
        this.stopBGM();
      }
      this.audioState = !this.audioState;
    },
    //定时轮换背景图
    getBgBanner() {
      if (this.current != 5) {
        this.current++;
      } else {
        this.current = 1;
      }
      this.bodyBg = `bodyBg${this.current}`;
    },
    //播放BGM
    playBGM() {
      this.$refs.audio.play();
    },
    //暂停BGM
    stopBGM() {
      this.$refs.audio.pause();
    },
  },
};
</script>

<style scoped>
@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.rotate {
  font-size: 2rem;
  cursor: pointer;
  z-index: 999;
  transition: 2s;
  /* transform-origin: 30px 30px;   */
  animation: rotate 10s linear infinite; /*开始动画后无限循环，用来控制rotate*/
}

#login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -99;
}
a {
  display: inline-block;
}
.default {
}
.box .bgAudio {
  position: fixed;
  right: 105px;
  bottom: 90px;
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
  padding: 0 15px;
}
.nav-bar .ant-menu-item {
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.nav-bar .ant-menu-item:hover {
  cursor: pointer;
  color: #52b7de;
  border-bottom: 2px solid #52b7de;
}
.box .bodyBg1 {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -999999;
  height: 100vh;
  width: 100vw;
  transition: background 3s ease 0.5s;
  background: url("http://8.131.96.6/blog/images/bg-1.jpg") center center /
    cover no-repeat;
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
  background: url("http://8.131.96.6/blog/images/bg-2.jpg") center center /
    cover no-repeat;
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
  background: url("http://8.131.96.6/blog/images/bg-3.jpg") center center /
    cover no-repeat;
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
  background: url("http://8.131.96.6/blog/images/bg-4.jpg") center center /
    cover no-repeat;
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
  background: url("http://8.131.96.6/blog/images/bg-5.jpg") center center /
    cover no-repeat;
  opacity: 0.8;
}
/* 回到顶部 hover */
.box .ant-back-top {
  bottom: 35px;
}
.ant-back-top-content:hover {
  background-color: rgba(0, 0, 0, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>