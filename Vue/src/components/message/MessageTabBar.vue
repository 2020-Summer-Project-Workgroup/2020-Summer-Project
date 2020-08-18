<template>
  <div id="message-bar-container">
    <span id="comment" @click="showComment">文档评论</span>
    <div v-show="showCommentLine" class="select-line" id="comment-line"></div>
    <span id="notice" @click="showNotice">团队信息</span>
    <div v-show="showNoticeLine" class="select-line" id="notice-line"></div>
    <div class="aline"></div>
  </div>
</template>

<script>
export default {
  name: "MessageTabBar",
  data() {
    return {
      showCommentLine: true,
      showNoticeLine: false
    }
  },
  methods: {
    showComment() {
      this.showCommentLine = true
      this.showNoticeLine = false
      this.$router.push('/desktop/message/comment')
    },
    showNotice() {
      this.showCommentLine = false
      this.showNoticeLine = true
      this.$router.push('/desktop/message/notice')
    }
  }
}
</script>

<style scoped>
#message-bar-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99px;
  background-color: rgba(242, 244, 244, 1);
  z-index: 10;
}

#message-bar-container span {
  position: absolute;
  top: 40px;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 37px;
  color: #616161;
}

#message-bar-container span:hover {
  cursor: pointer;
}

#comment {
  left: 10.09%;
}

#comment-line {
  left: 10.09%;
}

#notice {
  left: 25.6%;
}

#notice-line {
  left: 25.6%;
}

.aline {
  position: absolute;
  top: 98px;
  left: 10.09%;
  width: 75.86%;
  height: 1px;
  background-color: #CFCFCF;
  transform: rotate(-0.13deg);
}

.select-line {
  position: absolute;
  width: 113px;
  height: 0;
  left: 307px;
  top: 95px;
  border: 2px solid #54A193;
}
</style>