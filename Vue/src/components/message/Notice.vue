<template>
  <div class="message-box">
    <div class="message-item" v-for="comment in comments" :key="comment.id">
      <i class="message-avatar el-icon-message"></i>
      <div v-if="comment.type === 1">
        <span class="message-title">{{comment.sendName}} 邀请你加入：{{comment.content}}</span>
        <button class="button-green button-left" @click="accept">接受</button>
        <button class="button-grey button-right" @click="refuse">拒绝</button>
      </div>
      <div v-else-if="comment.type === 2">
        <span class="message-title">{{comment.sendName}} 邀请你加入：{{comment.content}}</span>
        <button class="button-white button-left">√已接受</button>
      </div>
      <div v-else-if="comment.type === 3">
        <span class="message-title">{{comment.sendName}} 邀请你加入：{{comment.content}}</span>
        <button class="button-white button-left">×已拒绝</button>
      </div>
      <div v-else>
        <span class="message-title">你被移出了：{{comment.content}}</span>
      </div>
      <span class="message-time">{{comment.time}}</span>
      <div class="aline"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comments",
  methods: {
    accept(noticeId) {
      this.$store.dispatch({
        type: 'updateTeamNoticeStatus',
        noticeId: noticeId,
        status: 2
      })
    },
    refuse(noticeId) {
      this.$store.dispatch({
        type: 'updateTeamNoticeStatus',
        noticeId: noticeId,
        status: 3
      })
    }
  },
  computed: {
    comments() {
      return this.$store.getters.teamNotices
    }
  }
}
</script>

<style scoped>
.message-box {
  position: absolute;
  width: 100%;
  height: calc(100% - 95px);
  left: 0;
  bottom: 0;
  overflow-y: auto;
}

.message-item {
  position: relative;
  left: 10.09%;
  width: 75.86%;
  margin-top: 10px;
  min-height: 160px;
}

.message-avatar {
  position: absolute;
  top: 29px;
  left: 0;
  font-size: 64px;
  color: #CFCFCF;
}

.message-title {
  position: absolute;
  top: 27px;
  left: 12.5%;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #616161;
}

.message-time {
  position: absolute;
  top: 60px;
  left: 12.5%;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #E0E1E1;
}

.button-green {
  position: absolute;
  border: none;
  border-radius: 5px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%,
  rgba(255, 255, 255, 0) 100%), #54A293;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #FFFFFF;
}
.button-green:hover {
  cursor: pointer;
  background: #54A193;
}

.button-grey {
  position: absolute;
  border: 1px solid #CFCFCF;
  box-sizing: border-box;
  border-radius: 5px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #E5E5E5;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #616161;
}
.button-grey:hover {
  cursor: pointer;
  background: #E5E5E5;
}

.button-white {
  position: absolute;
  border: 1px solid #CFCFCF;
  box-sizing: border-box;
  border-radius: 5px;
  background: #FFFFFF;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #CFCFCF;
}

.button-left {
  top: 89px;
  left: 12.5%;
  width: 14.4%;
  height: 36px;
}

.button-right {
  top: 89px;
  left: 28.62%;
  width: 14.4%;
  height: 36px;
}

.aline {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #CFCFCF;
  transform: rotate(-0.13deg);
}
</style>