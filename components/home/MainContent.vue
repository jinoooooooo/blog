<template>
  <!-- main -->

  <main class="mainContent">
    <div class="mainLeft">
      <!-- 文章列表  -->
      <div class="postList">
        <!-- 骨架屏 -->
        <a-skeleton
          :loading="loading"
          active
          avatar
          :paragraph="{ rows: 10 }"
        />
        <!-- 单条文章 -->
        <article
          v-for="item in articlesList"
          :key="item._id"
          class="post cardBox iconfont"
          :class="item.is_sticky ? 'icon-top' : ''"
        >
          <!-- 头部 -->
          <header class="postTitle">
            <!-- 标题 -->
            <h2 @click="$router.push(`/article?id=${item._id}`)">
              {{ item.title }}
            </h2>
            <!-- 文章信息 -->
            <div class="postInfo">
              <!-- 作者 -->
              <a
                class=""
                title="作者"
                target="_blank"
                href="https://gitee.com/jinooo"
                ><a-icon type="user" /> Jinooo</a
              >
              <!-- 发布时间 -->
              <span title="发布时间">
                <a-icon type="schedule" />
                {{ $filterTime(item.last_modify_date) }}
              </span>
              <!-- 分类 -->
              <span title="分类">
                <a-icon type="folder-open" />
                <span class="postLink">{{ item.category_name }}</span>
              </span>
              <!-- 标签 -->
              <span title="标签">
                <a-icon type="tag" />
                <span
                  class="postLink"
                  v-for="(tag, t_index) in item.tag_names"
                  :key="t_index"
                  >{{ tag
                  }}<span
                    v-if="t_index !== item.tag_names.length - 1"
                    class="spacer"
                    >/</span
                  ></span
                >
              </span>
            </div>
          </header>
          <!-- 分割线 -->
          <a-divider />
          <!-- 文章内容 -->
          <div class="postMain">
            <div class="postContent">
              <!-- 文章图片 -->
              <p align="center" style="overflow: hidden; border-radius: 0.5rem">
                <img :src="item.avatar" width="100%" />
              </p>
              <!-- 文章简述 -->
              <p class="summary">
                {{ item.summary }}
              </p>
            </div>
            <!-- 阅读全文 -->
            <a @click="$router.push(`/article?id=${item._id}`)" class="readMore"
              >Read more<a-icon type="right"
            /></a>
          </div>
        </article>
      </div>
    </div>

    <article class="mainRight">
      <!-- 个人介绍侧栏 -->
      <aside class="blogger cardBox">
        <img
          class="beeImg"
          src="https://raw.githubusercontent.com/jinoooooooo/blog_imgs/main/dfa7a12ed9051f13d90783d3e0a27e63.png"
          alt="bee"
          width="125"
        />
        <img
          class="beeImg2"
          src="https://cdn.jsdelivr.net/gh/jinoooooooo/blog_imgs/bee-2.png"
          alt="bee"
          width="100"
        />
        <img
          class="beeImg3"
          src="https://cdn.jsdelivr.net/gh/jinoooooooo/blog_imgs/fa08db48b58a2d954556d115ec88f09e.png"
          alt="bee"
          width="80"
        />
        <img
          class="beeImg4"
          src="https://cdn.jsdelivr.net/gh/jinoooooooo/blog_imgs/65f314ec94abdc8980c9d58ae67feccc.png"
          alt="bee"
          width="40"
        />
        <img
          class="beeImg5"
          src="https://cdn.jsdelivr.net/gh/jinoooooooo/blog_imgs/ec6f256d7e7d97fe178578ea4e898d33.png"
          alt="bee"
          width="80"
        />
        <img
          class="beeImg6"
          src="https://cdn.jsdelivr.net/gh/jinoooooooo/blog_imgs/993db3b3220ad1fca8a309bc55b95928.png"
          alt="bee"
          width="60"
        />
        <!-- 头像 -->
        <div class="avatar">
          <img
            class="avatarImg"
            src="https://cdn.jsdelivr.net/gh/jinoooooooo/blog_imgs/b3dd060acbe1ce06363c8ded81e6dc9b.jpeg"
            alt="头像"
          />
        </div>

        <!-- icons -->
        <div class="icons">
          <a-tooltip>
            <template slot="title">
              <img
                style="width: 7rem; heihgt: 7rem"
                src="https://cdn.jsdelivr.net/gh/jinoooooooo/blog_imgs@main//997c438d669c33e52d00ff39375658ed.jpeg"
                alt="wechat"
                title="wechat"
              />
            </template>
            <a class="anticon" style="line-height: 1rem">
              <a-icon type="user-add"
            /></a>
          </a-tooltip>
          <!-- 邮箱 -->
          <a
            href="mailto:jinooo0714@163.com"
            class="anticon"
            style="line-height: 1rem"
          >
            <a-icon type="mail"
          /></a>
          <!-- 网易云 -->
          <a
            href="https://music.163.com/#/playlist?id=368488897"
            target="_blank"
            class="anticon"
            style="line-height: 1rem"
          >
            <a-icon type="customer-service"
          /></a>
        </div>
        <!--  -->
        <div class="info">
          <span class="name">Jinooo</span>
          <span class="slogan">一名曾经想屠龙现在想撸猫的前端攻城狮</span>
        </div>
      </aside>
      <!-- 分类栏 -->
      <div class="categories cardBox">
        <!-- 文章分类 -->
        <a href="#" title="全部分类" class="cardTitle"
          ><a-icon type="folder-open" style="margin-right: 0.5rem" />文章分类</a
        >
        <!-- 分类列表 -->
        <a-skeleton :loading="loading" active />
        <div class="cateList">
          <a v-for="item in categotiesList" :key="item._id" href=""
            >{{ item.name }} <span></span></a
          >
        </div>
      </div>
      <!-- 标签栏 -->
      <div class="tags cardBox">
        <!-- 热门标签 -->
        <a href="" title="热门标签" class="cardTitle"
          ><a-icon type="tags" style="margin-right: 0.5rem" />热门标签</a
        >
        <!-- 标签列表 -->
        <a-skeleton :loading="loading" active />
        <div class="tagList">
          <template v-for="item in tagsList">
            <a-tag color="#94B3FD" :key="item._id">{{ item.name }}</a-tag>
          </template>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import "@/static/iconfont/iconfont.css";
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2178516_ikv86vlo27m.js",
});
export default {
  components: {
    IconFont,
  },
  data() {
    return {
      //分类列表
      categotiesList: [],
      //标签列表
      tagsList: [],
      //文章列表
      articlesList: [],
      //数据还未加载完成显示骨架屏
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    //分类
    const categoriesData = this.$axios.get("/api/blog/get_categories");
    //标签
    const tagsData = this.$axios.get("/api/blog/get_article_tags");
    //文章
    const articlesData = this.$axios.get("/api/blog/get_articles");
    let result = await Promise.all([categoriesData, tagsData, articlesData]);
    // console.log(result)
    this.categotiesList = result[0];
    this.tagsList = result[1]["data"];
    this.articlesList = result[2]["data"];
    this.loading = false;
  },
};
</script>

<style scoped>
.mainContent {
  margin-top: 2rem;
  margin: 1.5rem auto 0;
  max-width: 1100px;
  padding: 0 0.9rem;
  box-sizing: border-box;
  position: relative;
  display: flex;
}
.mainContent .mainRight > * {
  width: 265px;
  box-sizing: border-box;
}
.mainLeft {
  flex: 1;
  width: 72%;
}
.postList .post {
  position: relative;
  padding: 1rem 1.5rem;
  margin-bottom: 0.9rem;
  transition: all 0.3s;
  cursor: pointer;
  content-visibility: auto;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.cardBox {
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
}
.postTitle h2 {
  display: inline-block;
  margin: 0.5rem 0;
  font-size: 1.5rem;
  border: none;
  font-weight: 400;
  cursor: pointer;
}
.postTitle h2:hover {
  color: #4aa6c9;
  font-weight: 700;
}
/*  */
.mainContent .mainRight .cardBox {
  margin: 0 0 0.9rem 0.9rem;
  padding: 0.95rem;
}
.blogger {
  position: relative;
  height: auto;
  display: inline-table;
}
@keyframes bee {
  from {
    transform: rotate(0deg) translateX(20px) rotate(0deg);
  }

  to {
    transform: rotate(360deg) translateX(20px) rotate(-360deg);
  }
}
@keyframes bee2 {
  from {
    -webkit-transform: rotate(0deg) translateX(30px) rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg) translateX(30px) rotate(-360deg);
  }
}
@keyframes bee3 {
  from {
    -webkit-transform: rotate(0deg) translateX(20px) rotate(0deg);
  }

  to {
    -webkit-transform: rotate(-360deg) translateX(20px) rotate(360deg);
  }
}
@keyframes bee4 {
  from {
    transform: rotate(0deg) translateX(20px) rotate(0deg);
  }

  to {
    transform: rotate(-360deg) translateX(20px) rotate(360deg);
  }
}
@keyframes bee5 {
  from {
    transform: rotate(0deg) translateX(20px) rotate(0deg);
  }

  to {
    transform: rotate(-360deg) translateX(20px) rotate(360deg);
  }
}
@keyframes bee6 {
  from {
    transform: rotate(0deg) translateX(20px) rotate(0deg);
  }
  to {
    transform: rotate(-360deg) translateX(20px) rotate(360deg);
  }
}

.blogger .beeImg {
  transition: 2s;
  top: -20%;
  left: 0;
  position: absolute;
  animation: bee 3s linear infinite; /*开始动画后无限循环，用来控制rotate*/
}
.blogger .beeImg2 {
  transition: 2s;
  left: 20%;
  top: 0;
  position: absolute;
  animation: bee2 2s linear infinite; /*开始动画后无限循环，用来控制rotate*/
}
.blogger .beeImg3 {
  transition: 2s;
  right: 0;
  top: -5%;
  position: absolute;
  animation: bee3 1.9s linear infinite; /*开始动画后无限循环，用来控制rotate*/
}
.blogger .beeImg4 {
  transition: 2s;
  right: 30%;
  top: -15%;
  position: absolute;
  animation: bee4 1.7s linear infinite; /*开始动画后无限循环，用来控制rotate*/
}
.blogger .beeImg5 {
  transition: 2s;
  right: -10%;
  top: -15%;
  position: absolute;
  animation: bee5 2.3s linear infinite; /*开始动画后无限循环，用来控制rotate*/
}
.blogger .beeImg6 {
  transition: 2s;
  right: 8%;
  top: 15%;
  position: absolute;
  animation: bee6 1.7s linear infinite; /*开始动画后无限循环，用来控制rotate*/
}
.blogger .avatar {
  width: 235px;
  height: 235px;
  overflow: hidden;
}
.blogger .avatarImg {
  width: 100%;
  height: 100%;
  border-radius: 3px;
}
.blogger .icons {
  display: flex;
  border: 1px solid #999;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top: none;
  margin-top: -2px;
  height: 40px;
  align-items: center;
}
.blogger .icons .anticon {
  height: 100%;
  font-size: 1.8rem;
  width: 33.3333%;
  color: #333;
  text-align: center;
  opacity: 0.8;
  line-height: 3rem;
}
.blogger .icons i:hover {
  color: #66b4d1;
  cursor: pointer;
}
.blogger .info {
  margin: 12px 0 2px;
}
.blogger .info .name {
  font-size: 1.4rem;
  display: block;
  margin-bottom: 6px;
}
.blogger .info .slogan {
  font-size: 0.8rem;
}
/*  */
.mainRight .cardTitle {
  color: #222;
  opacity: 0.9;
  font-size: 1.2rem;
}
.categories .cateList a {
  display: block;
  padding: 8px 0.3rem 7px;
  color: #333;
  opacity: 0.8;
  font-size: 0.95rem;
  line-height: 0.95rem;
  position: relative;
  transition: all 0.3s;
  border-bottom: 1px solid #999;
  margin-top: -1px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.categories .cateList a:hover {
  color: #11a8cd;
  padding-left: 0.8rem;
}
.categories .cateList a span {
  float: right;
  background-color: #8d9ca1;
  color: #fcfdfd;
  border-radius: 8px;
  padding: 0 0.13rem;
  min-width: 1.2rem;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.6rem;
  text-align: center;
  opacity: 0.6;
  transition: opacity 0.3s;
}
.categories .cateList a span:hover {
  background-color: #333;
}
/*  */
.tags .tagList {
  text-align: justify;
  cursor: pointer;
  padding: 0.8rem 0.5rem 0.5rem;
  margin: 0 -0.5rem -0.5rem;
}
.tags .tagList .ant-tag:hover {
  opacity: 1;
  /* cursor: pointer; */
  cursor: pointer;
  transform: scale(1.2);
}
.tags .tagList .ant-tag {
  margin: 0 1.1rem 0.3rem 0;
}

/*  */
.postTitle .postInfo > span {
  opacity: 0.7;
  font-size: 0.8rem;
  margin-left: 1rem;
  cursor: pointer;
}
.postInfo a {
  color: cornflowerblue;
}
.spacer {
  margin: 0 0.4rem;
}
.postInfo .postLink:hover {
  color: #6d96e6;
}
.postList .post::before {
  position: absolute;
  top: -12px;
  right: -2px;
  font-size: 2.2rem;
  color: #11a8cd;
  opacity: 0.85;
}
.icon-top::before {
  content: "\e67d";
}
.post .ant-divider-horizontal {
  margin: 12px 0;
}
.post .postMain {
  margin: 0.5rem 0;
  overflow: hidden;
}
.post .postMain .postContent {
  margin-bottom: 0.3rem;
  font-size: 0.92rem;
}
.summary {
  max-height: 3rem;
  line-height: 1rem;
  display: -webkit-box; /**对象作为伸缩盒子模型展示**/
  -webkit-box-orient: vertical; /**设置或检索伸缩盒子对象的子元素的排列方式**/
  -webkit-line-clamp: 3; /**显示的行数**/
  overflow: hidden; /**隐藏超出的内容**/
}
.postContent img {
  max-height: 380px;
  max-width: 100% !important;
  margin: 0 auto;
  transition: all 0.8s; /* 所有的属性变化在0.5s的时间段内完成 */
}
.postContent img:hover {
  transform: scale(1.2); /* 鼠标放到图片上的时候图片按比例放大1.2倍   */
}
.readMore {
  float: right;
  margin-right: 1rem;
  line-height: 1rem;
  color: #11a8cd;
}
.ant-skeleton {
  background: #fff;
  padding: 1rem 1.5rem;
  margin-bottom: 0.9rem;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
}
</style>