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
      <p class="aboutContent">这是一个独立开发知识库&个人博客，前端设计仿Vdoing主题。让你的知识海洋像一本本书一样清晰易读。配合多维索引，让每一个知识点都可以快速定位！</p>
    </div>
    <!--  -->
    <div class="aboutItem">
      <header class="aboutHeader">
        <h1>
          <icon-font type="icon-xiongmao" />
          Me
        </h1>
      </header>
      <p>这是一个独立开发个人博客，前端仿照Vdoing主题。</p>
    </div>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2178516_5xct38u4tzm.js",
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
.about .aboutContent{
    font-size: 1rem;
    color: #222;
}
</style>