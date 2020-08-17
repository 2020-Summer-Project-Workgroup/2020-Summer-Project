<template>
  <div v-if="showUserSpace" id="user-space-container">
    <div id="user-space">
      <i class="el-icon-circle-close" id="close-user-space" @click="close"></i>
      <span class="span-user-space" id="title-user-space">个人信息</span>
      <div class="aline" id="above-line"></div>
      <div id="avatar">
        <el-avatar v-if="avatar!=null" :src="avatar" :size="81"></el-avatar>
        <el-avatar v-else icon="el-icon-user-solid" :size="81"></el-avatar>
        <div id="avatar-hover">
          <i class="el-icon-upload2"></i>
        </div>
      </div>
      <div v-if="!changeName" class="username-user-space">
        <span class="span-user-space">{{userName}}</span>
        <i class="el-icon-edit" @click="changeName=!changeName"></i>
      </div>
      <div v-if="changeName" class="username-user-space">
        <input type="text" v-model="username" @blur="commit"/>
      </div>
      <span class="span-user-space subtitle-user-space" id="email-user-space">邮箱</span>
      <span v-if="hasEmail" class="span-user-space info-user-space" id="userEmail-user-space">{{userEmail}}</span>
      <span v-if="!hasEmail" class="text-link" id="to-add-email" @click="toAddEmail">绑定邮箱</span>
      <span class="span-user-space subtitle-user-space" id="tel-user-space">手机</span>
      <span v-if="hasTel" class="span-user-space info-user-space" id="userTel-user-space">{{userTel}}</span>
      <span v-if="!hasTel" class="text-link" id="to-add-tel" @click="toAddTel">绑定手机</span>
      <span class="span-user-space subtitle-user-space" id="password-user-space">密码</span>
      <span class="span-user-space info-user-space" id="secret-user-space">{{userSecret}}</span>
      <span class="text-link" id="to-change-password" @click="toChangePassword">修改密码</span>
      <div class="aline" id="infer-line"></div>
      <button id="logout">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSpace",
  data() {
    return {
      username: '',
      changeName: false
    }
  },
  created() {
    this.username = this.$store.getters.username
  },
  methods: {
    toChangePassword() {
      this.$store.commit('userSpaceToChangePassword')
    },
    toAddEmail() {
      this.$store.commit('userSpaceToAddEmail')
    },
    toAddTel() {
      this.$store.commit('userSpaceToAddTel')
    },
    close() {
      this.$store.commit('closeUserSpace')
    },
    commit() {
      this.$store.dispatch('updateUsername', this.username).then(res => {
        if (res === 'Yes') {
          this.$store.commit('updateUsername', this.username)
        } else {
          this.$message.error('网络错误，用户名修改失败！')
          this.username = this.$store.getters.username
        }
      }).catch(err => {
        console.log(err)
      })
      this.changeName = false
    }
  },
  computed: {
    hasEmail() {
      return !(this.$store.getters.email === '')
    },
    hasTel() {
      return !(this.$store.getters.tel === '')
    },
    showUserSpace() {
      return this.$store.getters.showUserSpace
    },
    userName() {
      return this.$store.getters.username
    },
    userEmail() {
      return this.$store.getters.email
    },
    userTel() {
      return this.$store.getters.tel
    },
    userSecret() {
      return '********'
    },
    avatar() {
      return null;
    }
  }
}
</script>

<style scoped>
#user-space-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(207, 207, 207, 0.3);
  z-index: 30;
}

#user-space-container i {
  position: absolute;
}

#user-space-container i:hover {
  cursor: pointer;
}

#user-space {
  position: absolute;
  width: 26.51vw;
  height: 55.31vh;
  left: 35.36vw;
  top: 18.71vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

#close-user-space {
  position: absolute;
  right: 5.26%;
  top: 4.86%;
  font-size: 30px;
  color: #CFCFCF;
}

#avatar {
  position: absolute;
  left: 9.29%;
  top: 22.55%;
}

#avatar-hover {
  position: absolute;
  left: 0;
  top: 0;
  width: 81px;
  height: 81px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .4);
  font-size: 40px;
  display: none;
}

#avatar:hover #avatar-hover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.span-user-space {
  position: absolute;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #616161;
}

.subtitle-user-space {
  font-size: 20px;
  line-height: 26px;
}

.info-user-space {
  font-size: 20px;
  line-height: 26px;
}

#title-user-space {
  top: 10.53%;
  left: 9.29%;
  font-size: 25px;
  line-height: 33px;
}

.username-user-space span {
  top: 27.13%;
  left: 35.01%;
  font-size: 25px;
  line-height: 33px;
}

.username-user-space i {
  top: 29.02%;
  left: 50.1%;
  font-size: 19px;
  color: #CFCFCF;
}

.username-user-space input {
  top: 26.13%;
  left: 35.01%;
  width: 50.55%;
  height: 8.67%;
  position: absolute;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.05), 0 4px 4px rgba(0, 0, 0, 0.05);
  z-index: 10;
  font-size: 19px;
}

.username-user-space input:hover {
  border: 1px solid #54A293;
  background-color: #F2F4F4;
}

.username-user-space input:focus {
  outline: none;
  border: 1px solid #54A293;
  background-color: #F2F4F4;
}

#email-user-space {
  top: 45.3%;
  left: 11.79%;
}

#userEmail-user-space {
  top: 45.3%;
  left: 27.7%;
}

#tel-user-space {
  bottom: 34.45%;
  left: 11.79%;
}

#userTel-user-space {
  bottom: 34.45%;
  left: 27.7%;
}

#password-user-space {
  bottom: 20.25%;
  left: 11.79%;
}

#secret-user-space {
  bottom: 20.25%;
  left: 27.7%;
}

.aline {
  background-color: #CFCFCF;
  height: 1px;
  position: absolute;
}

#above-line {
  width: 50.09%;
  top: 14.98%;
  right: 16.22%;
}

#infer-line {
  width: 68.09%;
  bottom: 11.13%;
  left: 16.04%;
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

#to-change-password {
  left: 45.78%;
  bottom: 20.02%;
  position: absolute;
  font-size: 16px;
  line-height: 21px;
}

#to-add-email {
  top: 46.3%;
  left: 27.7%;
  position: absolute;
  font-size: 16px;
  line-height: 21px;
}

#to-add-tel {
  bottom: 34.45%;
  left: 27.7%;
  position: absolute;
  font-size: 16px;
  line-height: 21px;
}

#logout {
  position: absolute;
  width: 103px;
  height: 30px;
  right: 11.39%;
  bottom: 8.77%;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #E5E5E5;
  border: 1px solid #CFCFCF;
  box-sizing: border-box;
  border-radius: 30px;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #858585;
}

#logout:hover {
  cursor: pointer;
}
</style>