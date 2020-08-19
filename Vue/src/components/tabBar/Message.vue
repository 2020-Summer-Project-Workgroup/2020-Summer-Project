<template>
  <div id="message-item" @click="watch">
    <el-badge :value="value" class="item" :hidden="isHidden">
      <i class="el-icon-bell"></i>
    </el-badge>
  </div>
</template>

<script>
import {readNotice, readTeamNotice} from "@/network/message";

export default {
  name: "Message",
  methods: {
    watch() {
      this.$router.push('/desktop/message')
      if (this.value > 0) {
        readNotice(this.userId, this.firstNotice).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
        readTeamNotice(this.userId, this.firstTeamNotice).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
        this.$store.commit('setNoticeNum', 0)
      }
    }
  },
  computed: {
    userId() {
      return this.$store.getters.userId
    },
    firstNotice() {
      return this.$store.getters.notices[0].id
    },
    firstTeamNotice() {
      return this.$store.getters.teamNotices[0].id
    },
    value() {
      return this.$store.getters.noticeNum
    },
    isHidden() {
      return !(this.value > 0)
    }
  }
}
</script>

<style scoped>
#message-item {
  position: absolute;
  top: 20px;
  right: 5.22vw;
}

#message-item i {
  font-size: 30px;
  font-weight: bold;
  color: #54A193;
}

#message-item i:hover{
  cursor: pointer;
  opacity: 50%;
}
</style>