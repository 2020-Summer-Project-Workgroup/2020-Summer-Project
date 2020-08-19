<template>
  <div class="message-box">
    <div class="message-item" v-for="comment in comments" :key="comment.id">
      <el-avatar class="message-avatar" icon="el-icon-user-solid" :size="64"></el-avatar>
      <span class="message-title">{{comment.sendName}} 回复了 {{comment.title}}</span>
      <span class="message-time">{{comment.time}}</span>
      <span class="message-content">{{comment.content}}</span>
      <div class="aline"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comments",
  computed: {
    comments() {
      return this.$store.getters.notices
    }
  }
}
</script>

<style scoped>
.message-box {
  position: absolute;
  width: 100%;
  height: calc(100% - 95px);
  padding-top: 20px;
  left: 0;
  bottom: 0;
  overflow-y: auto;
}

.message-item {
  position: relative;
  left: 10.09%;
  width: 75.86%;
  margin-top: 20px;
  min-height: 220px;
}

.message-avatar {
  position: absolute;
  top: 29px;
  left: 0;
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

.message-content {
  position: absolute;
  padding: 10px;
  top: 92px;
  left: 12.5%;
  right: 0;
  bottom: 10%;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #616161;
  background-color: #E0E1E1;
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