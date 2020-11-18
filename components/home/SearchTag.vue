<template>
  <div class="searchTag">
    <a-input ref="tagInput" v-model="tagName" placeholder="Search Tag...">
      <icon-font type="icon-tag" slot="prefix" style="font-size: 1.1rem" />
      <icon-font type="icon-search" slot="suffix" />
    </a-input>
    <div class="tagList">
      <a-tag color="#2db7f5" v-for="item in 15" :key="item">
        # JavaScript(3)
      </a-tag>
    </div>
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
  data() {
    return {
      tagName: "",
    };
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
}
</style>