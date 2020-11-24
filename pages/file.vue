<template>
  <div class="file">
    <!-- 切换时间还是分类 -->
    <header class="fileHeader">
      <h1>
        <icon-font type="icon-wenjianjia" />
        归档
        <a-switch
          @change="onChange"
          checked-children="时间"
          un-checked-children="分类"
          defaultChecked
        />
      </h1>
    </header>
    <FileType :isTime="isTime" />
  </div>
</template>

<script>
import FileType from "@/components/home/FileType.vue";
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2178516_sqjv69p313.js",
});
export default {
  components: {
    IconFont,
    FileType,
  },
  data() {
    return {
      isTime: true,
    };
  },
  methods: {
    onChange(state) {
      this.isTime = state;
    },
  },
};
</script>

<style scoped>
.file {
  margin-top: 1.5rem !important;
  background: #ffffff;
  border-radius: 0.3rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  max-width: 860px;
  margin: 5rem auto;
  padding: 1rem 2.5rem 2rem;
}

.file .fileHeader .ant-switch {
  background-color: #84e989;
}
.file .fileHeader .ant-switch-checked {
  background-color: #1890ff;
  margin-left: 1.2rem;
}
.file .fileHeader h1 {
  font-size: 1.7rem;
  color: #10323b;
}
.fileHeader h1 .anticon {
  font-size: 1.2rem;
  margin-right: 0.2rem;
}
</style>