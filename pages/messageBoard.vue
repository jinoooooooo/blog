<template>
  <div class="msgBoard">
    <header class="msgHeader">
      <h1><icon-font type="icon-note" />留言板</h1>
      <p>
        {{ nowTime }}
      </p>
      <p>不论是友链🔗或者技术建议💡都欢迎您在下方评论留言...</p>
    </header>
    <MessageInput />
  </div>
</template>

<script>
import MessageInput from "@/components/home/MessageInput";
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2178516_4gcxmjeily.js",
});
export default {
  components: {
    MessageInput,
    IconFont,
  },
  computed: {
    nowTime() {
      let hour = new Date().getHours();
      if (hour > 5 && hour <= 11) {
        return `朋友早上好，今天出门天气怎样呢☁️？`;
      } else if (hour > 11 && hour <= 13) {
        return "朋友中午好，记得吃顿好的🍜！";
      } else if (hour > 13 && hour < 18) {
        return "朋友下午好，起来活动活动来杯下午茶吧🍵！";
      } else {
        return "朋友晚上好，该下班了吧好好休息♨️!";
      }
    },
  },
};
</script>

<style scoped>
.msgBoard {
  margin-top: 1.5rem !important;
  background: #ffffff;
  border-radius: 0.3rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  max-width: 860px;
  margin: 5rem auto;
  padding: 1rem 2.5rem 2rem;
}
.msgBoard .msgHeader h1 {
  font-size: 1.7rem;
  color: #10323b;
}
.msgBoard .msgHeader h1 .anticon {
  margin-right: 0.2rem;
}
</style>