<template>
  <div>
    <!-- 时间 -->
    <article>
      <div class="fileItem" v-for="(item, index) in articlesList" :key="index">
        <h2 class="fileTitle">
          {{ item.name }}
          <span v-if="item.sub_articles.length">{{
            `（${item.sub_articles.length}）`
          }}</span>
        </h2>
        <a-timeline v-if="item.sub_articles.length">
          <a-timeline-item
            v-for="(s_item, s_index) in item.sub_articles"
            :key="s_index"
            @click="$router.push(`/article?id=${s_item._id}`)"
          >
            <span>{{ $filterTime(s_item.last_modify_date) }}</span>
            {{ s_item.title }}
          </a-timeline-item>
        </a-timeline>
        <!-- 空数据展示 -->
        <a-empty v-else description="暂无文章" />
      </div>
      <!--  -->
    </article>
    <!-- 分类 -->
    <!-- <article v-else>
      <div class="fileItem" v-for="(item, index) in articlesList" :key="index">
        <h2 class="fileTitle"><i>#</i>前端<span> : 5</span></h2>
        <div class="cardBox">
          <a-card v-for="item in 5" :key="item">
            <div slot="title" class="cardTitle">
              <span>假如这是文章标题</span>
              <span class="cardDate">2020-09-11</span>
            </div>
            假如这是文章简介，可能不会这么长
          </a-card>
        </div>
      </div>
    </article> -->
  </div>
</template>

<script>
export default {
  props: {
    isTime: Boolean,
    articlesList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.fileItem .fileTitle {
  margin-bottom: 1.2rem;
  font-weight: 400;
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
.cardBox .cardTitle .cardDate {
  font-size: 0.4rem;
  line-height: 1.5rem;
  color: #999;
}
</style>