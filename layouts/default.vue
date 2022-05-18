<template>
  <!-- 顶部导航栏 -->
  <div class="box">
    <header class="top-header">
      <div class="nav-bar" ref="navBar">
        <!-- 左侧logo -->
        <a href="/" class="home-link">
          <img
            src="https://jinooo-blog.oss-cn-beijing.aliyuncs.com/blog_img/logo.png"
            class="logo"
            alt="Jinooo's blog"
          />
          <span class="logo-title">Jinooo's Blog</span>
        </a>
        <!-- 右侧链接 -->
        <div class="links">
          <!-- 搜索框 -->
          <div class="search-input">
            <a-auto-complete
              class="global-search"
              size="large"
              style="width: 100%"
              placeholder="input here"
              option-label-prop="title"
              @select="onSelect"
              v-model="keyword"
              @search="handleSearch"
            >
              <template slot="dataSource">
                <a-select-option
                  v-for="item in dataSource"
                  :key="item._id"
                  :title="item.summary"
                >
                  <span v-html="fliterTitle(item)"></span>
                </a-select-option>
              </template>
              <a-input :class="keyword.trim() ? 'show' : ''">
                <a-button
                  slot="suffix"
                  style="margin-right: -12px"
                  class="search-btn"
                  size="large"
                  type="primary"
                >
                  <a-icon type="search" />
                </a-button>
              </a-input>
            </a-auto-complete>
            <!-- <div class="inputIcon">
              <a-icon type="search"></a-icon>
            </div> -->
          </div>
          <!-- 导航菜单  -->
          <nav class="nav-links">
            <a-menu v-model="menuCurrent" mode="horizontal">
              <a-menu-item key="index">
                <NLink to="/" no-prefetch><a-icon type="bank" />首页</NLink>
              </a-menu-item>
              <a-menu-item key="file">
                <NLink to="/file"><a-icon type="table" />归档</NLink>
              </a-menu-item>
              <a-menu-item key="tag">
                <NLink to="/tag"><a-icon type="tags" />标签</NLink>
              </a-menu-item>
              <a-menu-item key="message_board"
                ><NLink to="/message_board"
                  ><a-icon type="message" />留言</NLink
                >
              </a-menu-item>
              <a-menu-item key="game"
                ><NLink to="/game"><a-icon type="star" />摸鱼小游戏</NLink>
              </a-menu-item>

              <a-menu-item key="about"
                ><NLink to="/about"
                  ><a-icon type="bug" /> 关于</NLink
                ></a-menu-item
              >
            </a-menu>
          </nav>
          <icon-font
            @click="toMyGitee"
            class="gitee-icon"
            type="icon-gitee-fill-round"
            style="line-height: 2.2rem"
          />
        </div>
      </div>
    </header>
    <Nuxt :nuxtChildKey="'123'" />
    <!-- 背景图片 -->
    <div :class="bodyBg"></div>
    <!-- 背景音乐 -->
    <div class="bgAudio">
      <audio id="audio" ref="audio" loop autoplay="autoplay">
        <source
          src="https://jinooo-blog.oss-cn-beijing.aliyuncs.com/blog_img/Darling.mp3"
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
    <Background ref="Background" />
    <!--  -->
  </div>
</template>

<script>
import Background from "@/components/home/Background";
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2178516_baawreayxjr.js",
});
export default {
  components: {
    IconFont,
    Background,
  },
  data() {
    return {
      dataSource: [],
      audioState: true,
      //搜索
      keyword: "",
      //右上角导航菜单
      menuCurrent: ["index"],
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
      timer: "",
    };
  },
  created() {
    this.getBgBanner();
  },
  mounted() {
    //定时轮换背景图
    this.bgInterval = setInterval(this.getBgBanner, 5500);
    //获取背景音乐状态
    this.audioState = this.$refs.audio.paused;
  },
  beforeDestroy() {
    //清除背景轮换定时器
    clearInterval(this.bgInterval);
    this.bgInterval = null;
  },
  methods: {
    //替换高亮字体
    fliterTitle(item) {
      if (item.title.includes(this.keyword)) {
        return (
          `${item.category_name}-` +
          item.title.replace(
            this.keyword,
            `<font color='#42cccc'>${this.keyword}</font>`
          )
        );
      } else {
        return `${item.category_name}-${item.title}`;
      }
    },
    //去我的码云
    toMyGitee() {
      let a = document.createElement("a");
      a.href = "https://gitee.com/jinooo";
      a.target = "_blank";
      a.click();
    },
    onSelect(value) {
      this.keyword='';
      this.$router.push(`/article?id=${value}`)
    },
    handleSearch(value) {
      if (value.trim()) {
        //搜索防抖
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          // 执行搜索请求
          this.getSearchData(value);
        }, 500); // 设置时间
      } else {
        setTimeout(() => {
          this.dataSource=[];
        }, 0);
      }
    },
    async getSearchData(value) {
      let res = await this.$axios.get(
        `/api/blog/get_articles?keyword=${value}`
      );
      this.dataSource = res.data;
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
  watch: {
    // 根据情况 $route.query 可以换成 $route.params
    "$route.name": {
      immediate: true, // 第一次的数据，也要当做是一种变化
      handler(new_value, old_value) {
        this.menuCurrent =
          new_value !== "article"
            ? [new_value]
            : old_value === undefined || old_value === "article"
            ? ["index"]
            : [old_value];
      },
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
.box {
  padding-bottom: 2.5rem;
}
.box .bgAudio {
  position: fixed;
  right: 3rem;
  bottom: 2rem;
}
.box .gitee-icon {
  line-height: 2.6rem;
  margin-left: 1rem;
}
.top-header {
  z-index: 9999;
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  top: 0;
}
.nav-bar {
  opacity: 1;
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  height: 3.6rem;
  background-color: #fff;
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
::v-deep .nav-bar .search-input .ant-input:hover {
  opacity: 1;
}
.nav-bar .search-input .search-btn {
  height: 30px;
}
::v-deep .nav-bar .search-input .show .ant-input {
  opacity: 1;
}

::v-deep .nav-bar .search-input .ant-input {
  opacity: 0;
  font-size: 15px;
  height: 30px;
  transition: all 0.7s;
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
/* .nav-bar .inputIcon {
  display: inline-block;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.45);
} */
.box .bodyBg1 {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -999999;
  height: 100vh;
  width: 100vw;
  transition: background 3s ease 0.5s;
  background: url("https://jinooo-blog.oss-cn-beijing.aliyuncs.com/blog_img/bg-1.jpg")
    center center / cover no-repeat;
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
  background: url("https://jinooo-blog.oss-cn-beijing.aliyuncs.com/blog_img/bg-2.jpg")
    center center / cover no-repeat;
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
  background: url("https://jinooo-blog.oss-cn-beijing.aliyuncs.com/blog_img/bg-3.jpg")
    center center / cover no-repeat;
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
  background: url("https://jinooo-blog.oss-cn-beijing.aliyuncs.com/blog_img/bg-4.jpg")
    center center / cover no-repeat;
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
  background: url("https://jinooo-blog.oss-cn-beijing.aliyuncs.com/blog_img/bg-5.jpg")
    center center / cover no-repeat;
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