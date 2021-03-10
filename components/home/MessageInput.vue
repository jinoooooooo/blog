<template>
  <div class="msgTextarea">
    <!-- 留言文本 -->
    <a-textarea
      :maxLength="70"
      placeholder="留下你的脚印🦶吧..."
      allow-clear
      @change="changeBtn"
      v-model="msgForm.msg"
    />
    <!-- 游客填写信息 -->
    <div class="msgInfo">
      <!-- 昵称 -->
      <a-input
        allowClear
        v-model="msgForm.userName"
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
        <a-switch checked-children="T" un-checked-children="F" />
      </a-tooltip>
      <!-- 提交按钮 -->
      <a-button
        type="primary"
        :disabled="
          msgForm.msg.trim() &&
          msgForm.userName.trim() &&
          msgForm.email.trim() &&
          isShowTip
        "
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
      <h2 class="msgCount">36<span>评论</span></h2>
      <a-comment>
        <p slot="author">
          <a>Jinooo</a>
          <span>2020-11-18 15:46:55 周三</span>
        </p>
        <a-avatar
          slot="avatar"
          src="http://82.156.194.232:8080/images/avatat2.jpeg"
          alt="Jinooo"
        />
        <p slot="content">我来试着评论一下</p>
        <span slot="actions" key="comment-nested-reply-to">回复</span>
        <a-comment>
          <span slot="actions">回复</span>
          <a slot="author">Jinooo</a>
          <a-avatar
            slot="avatar"
            src="http://82.156.194.232:8080/images/avatat2.jpeg"
            alt="Jinooo"
          />
          <p slot="content">我来试着评论一下的回复<b>212121</b></p>
          <a-comment>
            <span slot="actions">回复</span>
            <a slot="author">Jinooo</a>
            <a-avatar
              slot="avatar"
              src="http://82.156.194.232:8080/images/avatat2.jpeg"
              alt="Jinooo"
            />
            <p slot="content">我来试着评论一下的回复的回复</p>
          </a-comment>
          <a-comment>
            <span slot="actions">回复</span>
            <a slot="author">Jinooo</a>
            <a-avatar
              slot="avatar"
              src="http://82.156.194.232:8080/images/avatat2.jpeg"
              alt="Jinooo"
            />
            <p slot="content">我来试着评论一下的回复的回复</p>
          </a-comment>
        </a-comment>
      </a-comment>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgForm: {
        msg: "",
        userName: "",
        email: "",
      },
      emailReg: /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/,
      isShowBtn: false,
      //是否显示提示
      isShowTip: false,
    };
  },
  methods: {
    emailBlur() {
      if (this.emailReg.test(this.msgForm.email)) {
        this.isShowTip = false;
      } else {
        this.isShowTip = true;
      }
    },
    //
    changeBtn() {
      if (this.msgForm.msg.trim().length) {
        this.isShowBtn = true;
      } else {
        this.isShowBtn = false;
      }
    },
    //校验邮箱格式
    emailRule(item) {
      if (this.emailReg.test(this.msgForm.email)) {
        this.isShowTip = false;
      }
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

.msgComment .ant-comment-content-author-name a {
  color: rgba(0, 0, 0, 0.45);
  margin-right: 2rem;
  font-size: 1rem;
}
</style>