<template>
  <!-- main -->
  <main class="mainContent">
    <div class="mainLeft">
      <!-- 文章列表  -->
      <div class="postList">
        <!-- 单条文章 -->
        <article class="post cardBox iconfont icon-top">
          <!-- 头部 -->
          <header class="postTitle">
            <!-- 标题 -->
            <h2>如何根据系统主题自动响应CSS深色模式</h2>
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
                2020-12-31
              </span>
              <!-- 分类 -->
              <span title="发布时间">
                <a-icon type="folder-open" />
                <span class="postLink">页面</span><span class="spacer">/</span
                ><span class="postLink">CSS</span>
              </span>
              <!-- 标签 -->
              <span title="标签">
                <a-icon type="tag" />
                <span class="postLink">CSS</span>
              </span>
            </div>
          </header>
        </article>
      </div>
    </div>
    <!-- 个人介绍侧栏 -->
    <article class="mainRight">
      <aside class="blogger cardBox"></aside>
    </article>
  </main>
</template>

<script>
import "@/static/iconfont/iconfont.css";
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2178516_v8hz05it1qf.js ",
});
export default {
  components: {
    IconFont,
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
  margin: 0.5rem 0;
  font-size: 1.5rem;
  border: none;
  font-weight: 400;
  cursor: pointer;
}
.postTitle h2:hover {
  color: #4aa6c9;
}
/*  */
.mainContent .mainRight .cardBox {
  margin: 0 0 0.9rem 0.9rem;
  padding: 0.95rem;
}
.blogger {
  height: auto;
}
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
  font-size: 2.6rem;
  color: #11a8cd;
  opacity: 0.85;
}
.icon-top::before {
  content: "\e67d";
}
</style>