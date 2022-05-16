<template>
  <div class="msgTextarea">
    <!-- 留言文本 -->
    <a-textarea
      :maxLength="70"
      placeholder="留下你的脚印🦶吧..."
      allow-clear
      v-model="msgForm.content"
    />
    <!-- 游客填写信息 -->
    <div class="msgInfo">
      <!-- 昵称 -->
      <a-input
        allowClear
        v-model="msgForm.nickname"
        placeholder="留下你的昵称"
        :maxLength="10"
      >
        <a-icon slot="prefix" type="user" />
      </a-input>
      <!-- 邮箱 -->
      <a-input
        allowClear
        v-model="msgForm.email"
        placeholder="再留下你的邮箱"
        :maxLength="32"
        @change="emailRule"
        @blur.prevent="emailBlur"
        class="redTips"
      >
        <a-icon slot="prefix" type="mail" />
      </a-input>
      <!-- 是否隐秘留言 -->
      <a-tooltip>
        <template slot="title">
          你的留言仅博主能看见 <br />下方显示隐秘留言
        </template>
        <a-switch
          v-model="msgForm.anonymous"
          checked-children="T"
          un-checked-children="F"
        />
      </a-tooltip>
      <!-- 提交按钮 -->
      <a-button
        type="primary"
        :disabled="
          msgForm.content.trim() &&
          msgForm.nickname.trim() &&
          msgForm.email.trim() &&
          isShowTip
        "
        :loading="submitLoading"
        @click="submitMsg"
      >
        确 认
      </a-button>
    </div>
    <!-- 提示消息 -->
    <p class="msgTips" v-if="isShowTip">
      <span></span>
      <span>请输入正确的邮箱格式哦</span>
    </p>
    <a-divider />

    <!-- 评论区 -->
    <article class="msgComment">
      <h2 class="msgCount">{{ feedbackData.length }}<span>评论</span></h2>
      <a-comment v-for="item in feedbackData" :key="item._id">
        <p slot="author" class="flex_jc_sb">
          <a>{{ item.nickname }}</a>
          <span>{{ formatMsgTime(item.create_date) }}</span>
        </p>
        <a-avatar
          slot="avatar"
          src="https://cdn.jsdelivr.net/gh/jinoooooooo/blog_imgs/b3dd060acbe1ce06363c8ded81e6dc9b.jpeg"
          alt="Jinooo"
        />
        <p slot="content">{{ item.content }}</p>
      </a-comment>
    </article>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
export default {
  data() {
    return {
      msgForm: {
        content: "",
        nickname: "",
        email: "",
        anonymous: false,
      },
      emailReg:
        /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/,
      isShowBtn: false,
      //是否显示提示
      isShowTip: false,
      submitLoading: false,
      feedbackData: [],
    };
  },
  created() {
    this.getFeedback();
  },
  methods: {
    async getFeedback() {
      this.feedbackData = await this.$axios.get("/api/blog/get_feedback");
    },
    emailBlur() {
      if (this.emailReg.test(this.msgForm.email)) {
        this.isShowTip = false;
      } else {
        this.isShowTip = true;
      }
    },
    //校验邮箱格式
    emailRule(item) {
      if (this.emailReg.test(this.msgForm.email)) {
        this.isShowTip = false;
      }
    },
    async submitMsg() {
      this.submitLoading = true;
      let info = await this.$axios.post("/api/blog/set_feedback", this.msgForm);
      if (info.code === 0) {
        this.msgForm.content = "";
        this.$message.success(info.msg);
        this.getFeedback()
      }
      this.submitLoading = false;
    },
    formatMsgTime(timespan) {
      var dateTime = new Date(timespan); // 将传进来的字符串或者毫秒转为标准时间
      var year = dateTime.getFullYear();
      var month = dateTime.getMonth() + 1;
      var day = dateTime.getDate();
      var hour = dateTime.getHours();
      var minute = dateTime.getMinutes();
      // var second = dateTime.getSeconds()
      var millisecond = dateTime.getTime(); // 将当前编辑的时间转换为毫秒
      var now = new Date(); // 获取本机当前的时间
      var nowNew = now.getTime(); // 将本机的时间转换为毫秒
      var milliseconds = 0;
      var timeSpanStr;
      milliseconds = nowNew - millisecond;
      if (milliseconds <= 1000 * 60 * 1) {
        // 小于一分钟展示为刚刚
        timeSpanStr = "刚刚";
      } else if (
        1000 * 60 * 1 < milliseconds &&
        milliseconds <= 1000 * 60 * 60
      ) {
        // 大于一分钟小于一小时展示为分钟
        timeSpanStr = Math.round(milliseconds / (1000 * 60)) + "分钟前";
      } else if (
        1000 * 60 * 60 * 1 < milliseconds &&
        milliseconds <= 1000 * 60 * 60 * 24
      ) {
        // 大于一小时小于一天展示为小时
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + "小时前";
      } else if (
        1000 * 60 * 60 * 24 < milliseconds &&
        milliseconds <= 1000 * 60 * 60 * 24 * 15
      ) {
        // 大于一天小于十五天展示位天
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + "天前";
      } else if (
        milliseconds > 1000 * 60 * 60 * 24 * 15 &&
        year === now.getFullYear()
      ) {
        timeSpanStr = month + "-" + day + " " + hour + ":" + minute;
      } else {
        timeSpanStr =
          year + "-" + month + "-" + day + " " + hour + ":" + minute;
      }
      return timeSpanStr;
    },
  },
};
</script>

<style scoped>
.msgBoard .msgTextarea {
  margin: 2rem 0;
}
.msgTextarea .ant-input-affix-wrapper-textarea-with-clear-btn {
  margin-bottom: 1rem;
}
.msgBoard .msgInfo {
  position: relative;
}
.msgBoard .msgInfo .ant-input-affix-wrapper {
  width: 34%;
}
.msgBoard .msgInfo .ant-input-affix-wrapper:nth-child(1) {
  width: 20%;
}
::v-deep .msgInfo .ant-input-affix-wrapper .ant-input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 2px;
}
.msgTips {
  margin-top: 0.2rem;
  color: red;
}
.msgTips span:nth-child(1) {
  display: inline-block;
  width: 21.2%;
}
.msgInfo .ant-switch {
  margin: 0 2rem;
}

.msgInfo .ant-btn {
  width: 15%;
  position: absolute;
  right: 0;
}
.msgComment {
  margin: 2rem 0;
}
.msgComment .msgCount span {
  font-size: 0.9rem;
}
.ant-comment {
  border-bottom: 1px solid #e4e6eb;
  margin-bottom: 1.5rem;
}
.ant-comment .ant-comment-inner {
  padding-bottom: 0;
}
::v-deep .msgComment .ant-comment-content-author-name {
  width: 100%;
}
.msgComment .ant-comment-content-author-name a {
  color: rgba(0, 0, 0, 0.45);
  margin-right: 2rem;
  font-size: 1rem;
}
.flex_jc_sb {
  display: flex;
  justify-content: space-between;
}
</style>