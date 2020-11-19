<template>
  <div>
    <!--  -->
    <div class="aboutItem">
      <header class="aboutHeader">
        <h1>
          <icon-font type="icon-blog" />
          BLog
        </h1>
      </header>
      <p class="aboutContent">
        这是一个独立开发知识库&个人博客，前端设计仿Vdoing主题。<br />
        让你的知识海洋像一本本书一样清晰易读。配合多维索引，让每一个知识点都可以快速定位！
      </p>
    </div>
    <!--  -->
    <div class="aboutItem">
      <header class="aboutHeader">
        <h1>
          <icon-font type="icon-xiongmao" />
          Me
        </h1>
      </header>
      <p class="aboutContent">
        00后🦁️座前端实习生<br />来自湖南现在北漂程序猿🐒
        <br />
        学习Python🐍ing，梦想往全栈方面发展
        <br />爱好摄影📹、音乐🎵、旅游，对一切未知事物感兴趣!
      </p>
    </div>
    <!--  -->
    <div class="aboutItem">
      <header class="aboutHeader">
        <h1>
          <icon-font type="icon-lvtu" />
          Me Experience
        </h1>
      </header>
      <p class="aboutContent">
        2021年即将毕业🎓传智专修学院(大专)
        <br />
        2020.8——至今 蓝气球(北京)医学研究有限公司 前端开发实习生
        <br />
        工作主要从事医学、药学、临床💊行业网站开发，包括后台管理系统前端开发及供医生👨‍⚕️和患者使用的小程序开发
      </p>
    </div>
    <!--  -->
    <div class="aboutItem">
      <header class="aboutHeader">
        <h1>
          <icon-font type="icon-design-" />
          Call Me
        </h1>
      </header>
      <p class="aboutContent">
        WeChat ：jinoooc
        <br />
        Email ：jinooo0714@163.com
        <br />
        Gitee ：https://gitee.com/jinooo
      </p>
    </div>
    <a href="https://gitee.com/jinooo/my-blog/commits/master" target="blank"
      >更新日志<a-icon type="branches"
    /></a>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2178516_zhwwjv1uas.js",
});
export default {
  components: {
    IconFont,
  },
};
</script>


<style scoped>
.about .aboutItem {
  margin-top: 1.5rem !important;
  background: #ffffff;
  border-radius: 0.3rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  max-width: 860px;
  margin: 3rem auto;
  padding: 1rem 2.5rem 2rem;
}
.about .aboutHeader h1 {
  font-size: 1.7rem;
  color: #10323b;
}
.aboutHeader h1 .anticon {
  font-size: 1.7rem;
  margin-right: 0.2rem;
}
.about .aboutContent {
  font-size: 1rem;
  color: #222;
  line-height: 1.6rem;
}
</style>