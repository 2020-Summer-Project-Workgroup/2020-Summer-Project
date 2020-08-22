<template>
  <div v-if="showInvite" class="popup-container">
    <div id="invite">
      <span class="text-link" id="back-to-members" @click="backToMembers">返回成员管理</span>
      <span class="invite-title">邀请加入 {{teamName}}</span>
      <i class="el-icon-circle-close" id="close-invite" @click="close"></i>
      <div class="search-bar">
        <input id="search-input" placeholder="输入邮箱/手机号" v-model="userId">
        <img id="search-button" src="~assets/search.png" @click="search">
      </div>
      <div class="user-invite-box">
        <div class="user-invite-item" v-for="user in userList" :key="user.id">
          <el-avatar style="left: 0" icon="el-icon-user-solid" :size="48"></el-avatar>
          <span class="invite-user-name">{{user.name}}</span>
          <span class="invite-user-contact" v-if="!(user.tel === '')">{{user.tel}}</span>
          <span class="invite-user-contact" v-else>{{user.email}}</span>
          <button class="button-invite" @click="inviteUser(user.id)">邀请</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {inviteUser, searchUser} from "@/network/team";

export default {
  name: "Invite",
  data() {
    return {
      userId: '',
      userList: []
    }
  },
  methods: {
    close() {
      this.$store.commit('closeInvite')
    },
    backToMembers() {
      this.$store.commit('changeInviteToMember')
    },
    // 网络请求相关
    search() {
      searchUser(this.userId).then(res => {
        console.log(res)
        this.userList = res
      }).catch(err => {
        console.log(err)
      })
    },
    inviteUser(userId) {
      inviteUser(userId, this.$store.getters.currentGroup.id).then(res => {
        if (res === 'Yes') {
          this.$message({
            message: '邀请成功！',
            type: 'success'
          })
        } else {
          this.$message.error('网络错误，邀请失败！')
        }
      })
    }
  },
  computed: {
    showInvite() {
      return this.$store.getters.showInvite
    },
    teamName() {
      return this.$store.getters.currentGroup.name
    }
  },
  watch: {
    userId: function () {
      this.search()
    }
  }
}
</script>

<style scoped>
.popup-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(207, 207, 207, .3);
  z-index: 50;
}

#invite {
  position: absolute;
  left: 28.59vw;
  top: 15.82vh;
  width: 42.5vw;
  height: 78.75vh;
  background: #FFFFFF;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

#close-invite {
  position: absolute;
  right: 5.26%;
  top: 4.86%;
  font-size: 30px;
  color: #CFCFCF;
}
#close-invite:hover {
  cursor: pointer;
}

.text-link {
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #54A193;
  z-index: 12;
}
.text-link:hover {
  cursor: pointer;
  text-decoration: underline;
}

#back-to-members {
  position: absolute;
  left: 8.36%;
  top: 9.07%;
  font-size: 16px;
  line-height: 24px;
}

.invite-title {
  position: absolute;
  left: 27.94%;
  top: 7.33%;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 37px;
  color: #616161;
}

.search-bar {
  position: absolute;
  top: 14.81%;
  left: 8.36%;
  width: 82.51%;
}

input {
  background: #FFFFFF;
  font-size: 20px;
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica,
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  border: 1px solid #CFCFCF;
  box-sizing: border-box;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05), inset 0 5px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}

input:hover {
  background: #F2F4F4;
  border: 1px solid #54A193;
}

input:focus {
  outline: none;
  background: #F2F4F4;
  border: 1px solid #54A193;
}

#search-input {
  width: 100%;
  height: 38px;
  padding-left: 54px;
}

#search-input::placeholder {
  position: relative;
  top: calc(50% - 16px);
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 29px;
  color: #CFCFCF;
}

#search-button {
  position: absolute;
  width: 25px;
  height: 25px;
  left: 18px;
  top: 7px;
}

.user-invite-box {
  position: absolute;
  left: 8.36%;
  top: 27.27%;
  width: 82.51%;
  bottom: 10%;
  overflow-y: auto;
}

.user-invite-item {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  padding: 10px;
}

.user-invite-item .invite-user-name {
  position: absolute;
  top: 20px;
  left: 20%;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
  color: #616161;
}

.user-invite-item .invite-user-contact {
  position: absolute;
  top: 23px;
  left: 37%;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 14px;
  color: #616161;
}

.user-invite-item .button-invite {
  position: absolute;
  right: 0;
  top: 11px;
  width: 19.1%;
  height: 30px;
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
.button-invite:hover {
  cursor: pointer;
  background: #54A193;
}
</style>