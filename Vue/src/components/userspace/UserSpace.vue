<template>
  <div v-if="showUserSpace" id="user-space-container">
    <div id="user-space">
      <i class="el-icon-circle-close" id="close-user-space" @click="close"></i>
      <span class="span-user-space" id="title-user-space">个人信息</span>
      <div class="aline" id="above-line"></div>
      <span class="span-user-space" id="username-user-space">{{userName}}</span>
      <span class="span-user-space subtitle-user-space" id="email-user-space">邮箱</span>
      <span class="span-user-space info-user-space" id="userEmail-user-space">{{userEmail}}</span>
      <span class="span-user-space subtitle-user-space" id="tel-user-space">手机</span>
      <span class="span-user-space info-user-space" id="userTel-user-space">{{userTel}}</span>
      <span class="span-user-space subtitle-user-space" id="password-user-space">密码</span>
      <span class="span-user-space info-user-space" id="secret-user-space">{{userSecret}}</span>
      <span class="text-link" id="to-change-password" @click="toChangePassword">修改密码</span>
      <div class="aline" id="infer-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSpace",
  methods: {
    toChangePassword() {
      this.$store.commit('userSpaceToChangePassword')
    },
    close() {
      this.$store.commit('closeUserSpace')
    }
  },
  computed: {
    showUserSpace() {
      return this.$store.getters.showUserSpace
    },
    userName() {
      return 'wxy'
    },
    userEmail() {
      return 'h56983577@126.com'
    },
    userTel() {
      return '15911103365'
    },
    userSecret() {
      return '********'
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
  right: 65.92%;
  font-size: 25px;
  line-height: 33px;
}

#username-user-space {
  top: 27.13%;
  left: 33.01%;
  font-size: 25px;
  line-height: 33px;
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
  bottom: 88.48%;
  position: absolute;
  font-size: 16px;
  line-height: 21px;
}
</style>