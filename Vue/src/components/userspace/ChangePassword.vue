<template>
  <div v-if="showChangePassword" id="change-password-container">
    <div id="change-password">
      <i class="el-icon-circle-close" id="close-change-password" @click="close"></i>
      <span class="text-link" id="to-user-space" @click="toUserSpace">>>个人信息</span>
      <div class="form-item">
        <label for="old-password" style="top: 12.52%">输入旧密码</label>
        <input type="text" id="old-password" name="password" v-model="oldPassword" style="top: 18.49%"/>
      </div>
      <div class="form-item">
        <label for="new-password" style="top: 32.45%">新密码</label>
        <input type="password" id="new-password" name="password" v-model="newPassword" style="top: 38.94%"/>
      </div>
      <div class="form-item">
        <label for="password-confirm" style="top: 52.76%">密码确认</label>
        <input type="password" id="password-confirm" name="password" v-model="passwordConfirm" style="top: 58.67%"/>
      </div>
      <button id="confirm" @click="submit">完成修改</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      passwordConfirm: ''
    }
  },
  methods: {
    toUserSpace() {
      this.$store.commit('changePasswordToUserSpace')
      this.reset()
    },
    close() {
      this.$store.commit('closeChangePassword')
      this.reset()
    },
    reset() {
      this.oldPassword = ''
      this.newPassword = ''
      this.passwordConfirm = ''
    },
    submit() {
      if (!(this.oldPassword === this.$store.getters.password)) {
        this.$message.error('旧密码错误！')
      } else if (!(this.newPassword === this.passwordConfirm)) {
        this.$message.error('两次密码输入不一样！')
      } else {
        this.$store.dispatch('updatePassword', this.newPassword).then(res => {
          if (res === 'Yes') {
            this.$message({
              message: '修改成功！',
              type: 'success'
            })
            this.$store.commit('updatePassword', this.newPassword)
          } else {
            this.$message.error('网络错误，修改失败！')
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }
  },
  computed: {
    showChangePassword() {
      return this.$store.getters.showChangePassword
    }
  }
}
</script>

<style scoped>
#change-password-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(207, 207, 207, 0.3);
  z-index: 30;
}

#change-password-container i {
  position: absolute;
}

#change-password-container i:hover {
  cursor: pointer;
}

#change-password {
  position: absolute;
  width: 32.81vw;
  height: 59.12vh;
  left: 33.59vw;
  top: 18.71vh;
  background: #FFFFFF;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  z-index: 35;
}

#close-change-password {
  right: 5.26%;
  top: 4.86%;
  font-size: 30px;
  color: #CFCFCF;
}

input {
  width: 70.55%;
  height: 10.67%;
  left: 14.17%;
  position: absolute;
  font-size: 20px;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.05), 0 4px 4px rgba(0, 0, 0, 0.05);
  z-index: 10;
}

input:hover {
  border: 1px solid #54A293;
  background-color: #F2F4F4;
}

input:focus {
  outline: none;
  border: 1px solid #54A293;
  background-color: #F2F4F4;
}

label {
  left: 14.17%;
  position: absolute;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #606060;
  z-index: 5;
}

button {
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

button:hover {
  background-color: #54A293;
}

button:active {
  outline: none;
  background-color: #54A293;
}

#confirm {
  position: absolute;
  width: 70.63%;
  height: 10.67%;
  left: 14.13%;
  top: 79.1%;
  font-size: 25px;
  line-height: 33px;
  z-index: 5;
}

.text-link {
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #54A193;
  z-index: 12;
}

.text-link:hover {
  cursor: pointer;
  text-decoration: underline;
}

#to-user-space {
  left: calc(78.73% - 50px);
  top: 6.25%;
  bottom: 88.48%;
  position: absolute;
}
</style>