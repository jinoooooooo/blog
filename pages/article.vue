<template>
  <div class="article" v-if="articleDetail">
    <div class="article_top">
      <!-- 面包屑 -->
      <span class="back-btn" @click="$router.back()"
        ><a-icon type="left" />Go back</span
      >
      <!-- 文章详情信息 -->
      <div class="postInfo" >
        <!-- 作者 -->

        <a
          class=""
          title="作者"
          target="_blank"
          href="https://gitee.com/jinooo"
        >
          <a-avatar
            :src="articleDetail['avatar']"
            style="vertical-align: text-bottom"
            alt="作者头像"
          />
          Jinooo</a
        >
        <!-- 发布时间 -->
        <span v-if="articleDetail.publish_date">
          <a-icon type="schedule" />
          {{ $filterTime(articleDetail.publish_date) }}
        </span>
        <!-- 分类 -->
        <span>
          <a-icon type="folder-open" />
          <span class="postLink">{{ articleDetail.category_name }}</span>
        </span>
        <!-- 标签 -->
        <span>
          <a-icon type="tag" />
          <span
            class="postLink"
            v-for="(item, index) in articleDetail.tag_names"
            :key="index"
            >{{ item }}
            <span
              class="spacer"
              v-if="index !== articleDetail.tag_names.length - 1"
              >/</span
            ></span
          >
        </span>
        <!-- 阅读量 -->
        <span>
          <a-icon type="read" />
          <span class="postLink">阅读量：{{ articleDetail.view_count }}</span>
        </span>
      </div>
    </div>
    <!-- 文章正文 -->
    <div class="article_content">
      <h2 class="article_content_title">{{ articleDetail.title }}</h2>
      <no-ssr>
        <mavon-editor
          class="md"
          :value="articleDetail.content"
          :subfield="false"
          :defaultOpen="'preview'"
          :toolbarsFlag="false"
          :editable="false"
          :scrollStyle="true"
        ></mavon-editor>
      </no-ssr>
      <!-- 跳转编辑 更新时间 -->
      <div class="article_edit">
        <div class="to_edit">去编辑<a-icon type="edit" /></div>
        <div class="last_updated">
          <span class="prefix">上次更新：</span>
          <span class="time">{{
            $filterTime(articleDetail.last_modify_date)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
    };
  },
  async asyncData({ app }) {
    const { data } = await app.$axios.get(
      `/api/blog/get_article_by_id?_id=${app.context.query.id}`
    );
    return { articleDetail: data[0] };
  },
};
</script>

<style scoped>
.article {
  padding: 3rem;
  background: #fff;
  margin: 3rem;
  border-radius: 15px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
}
.back-btn {
  line-height: 1rem;
}
.back-btn:hover {
  color: cornflowerblue;
  cursor: pointer;
}
.article .article_top {
  display: flex;
  justify-content: space-between;
}
.postInfo > span {
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
.article_content {
  padding: 1rem;
}
.article_content_title {
  font-size: 2rem;
}
.article_edit {
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;
}
.article_edit .to_edit {
  color: #11a8cd;
  font-size: 1rem;
  cursor: pointer;
}
.article_edit .last_updated .prefix {
  color: #00323c;
  font-weight: 500;
  opacity: 0.8;
}
.article_edit .last_updated .time {
  font-weight: 400;
  color: #aaa;
}
</style>
