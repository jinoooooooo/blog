<template>
  <div class="searchTag">
    <a-input
      ref="tagInput"
      v-model="tagName"
      placeholder="输入文章标题关键词来搜索哦"
      disabled
    >
      <icon-font type="icon-tag" slot="prefix" style="font-size: 1.1rem" />
      <icon-font type="icon-search" slot="suffix" />
    </a-input>
    <div class="tagList">
      <div v-for="item in tagList" :key="item._id">
        <a-tag
          :color="item.isActive ? '#0AA1DD' : '#79DAE8'"
          @click="activeTag(item)"
        >
          {{ `# ${item.name} (${item.sub_articles.length})` }}
        </a-tag>
      </div>
    </div>
    <!-- 标签下的文章列表 -->
    <template v-if="tagDetail._id">
      <article v-if="tagDetail.sub_articles && tagDetail.sub_articles.length">
        <div class="fileItem">
          <h2 class="fileTitle">
            <i>#</i>{{ tagDetail.name
            }}<span> : {{ tagDetail.sub_articles.length }}</span>
          </h2>
          <div class="cardBox">
            <a-card
              v-for="arts in tagDetail.sub_articles"
              :key="arts._id"
              @click="$router.push(`/article?id=${arts._id}`)"
            >
              <div slot="title" class="cardTitle">
                <span>{{ arts.title }}</span>
                <span class="cardDate">2020-09-11</span>
              </div>
              {{ arts.summary }}
            </a-card>
          </div>
        </div>
      </article>
      <div v-else>
        <a-empty description="暂无文章" />
      </div>
    </template>
  </div>
</template>

<script>
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2178516_nuqy2zwseer.js",
});
export default {
  components: {
    IconFont,
  },
  props: {
    tagList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      tagName: "",
      tagDetail: {},
    };
  },
  methods: {
    activeTag(item) {
      this.tagDetail = item;
      this.tagList.map((i) => (i.isActive = i._id === item._id));
    },
  },
};
</script>

<style scoped>
.searchTag {
  margin-top: 3rem;
}
::v-deep.searchTag .ant-input {
  width: 100%;
  height: 40px;
  border-radius: 20px;
}
.searchTag .tagList {
  margin: 1.5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.searchTag .tagList .ant-tag {
  border-radius: 14px;
  padding: 3px 10px;
  font-size: 12px;
  margin-bottom: 1rem;
  cursor: pointer;
}
.fileItem .fileTitle {
  margin-bottom: 1.2rem;
  font-weight: 300;
  font-size: 1.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #d9d9d9;
}
.fileItem .fileTitle i {
  color: #eb5055;
  font-size: 1.2rem;
  margin-right: 0.5rem;
}
.fileItem .fileTitle span {
  font-size: 1.4rem;
}
.fileItem .ant-timeline-item {
  font-size: 20px;
}
.fileItem .ant-timeline-item span {
  display: block;
  font-size: 15px;
  color: #595959;
}
::v-deep .ant-timeline-item-content {
  transition: all 0.3s;
}
::v-deep .ant-timeline-item-content:hover {
  cursor: pointer;
  margin: 0 0 0 30px;
  color: #4ba7c9;
}
::v-deep .fileItem .ant-timeline-item-head {
  top: 15px;
}
::v-deep .fileItem .ant-timeline-item-tail {
  top: 25px;
}
/*  */
.fileItem .ant-card {
  width: 45%;
  border-radius: 0.4rem;
  margin-bottom: 1.2rem;
}
.cardBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.cardBox .ant-card:hover {
  transform: translateY(-8px);
  cursor: pointer;
}
.cardBox .cardTitle {
  display: flex;
  font-size: 1.1rem;
  font-weight: 400;
  color: #595959;
  justify-content: space-between;
}
.cardBox .cardTitle :first-child {
  max-width: 72%;
  text-overflow: ellipsis;
  overflow: hidden;
}
.cardBox .cardTitle .cardDate {
  font-size: 0.4rem;
  line-height: 1.5rem;
  color: #999;
}
::v-deep .cardBox .ant-card .ant-card-body {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 5em;
}
</style>