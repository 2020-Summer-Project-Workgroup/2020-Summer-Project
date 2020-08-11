<template>
  <div class="register-container">
    <div class="title">
      <span>注册</span>
    </div>
    <div class="register-form">
      <div class="form-item">
        <div v-if="isTel">
          <label for="tel" style="top: 70px">
            <span :style="telColor" @click="switchToTel">输入手机</span>
            /
            <span :style="emailColor" @click="switchToEmail">邮箱</span>
          </label>
          <input type="text" id="tel" name="username" v-model="tel" style="top: 104px"/>
        </div>
        <div v-else>
          <label for="email" style="top: 70px">
            <span :style="telColor" @click="switchToTel">输入手机</span>
            /
            <span :style="emailColor" @click="switchToEmail">邮箱</span>
          </label>
          <input type="text" id="email" name="username" v-model="email" style="top: 104px"/>
        </div>
      </div>
      <div class="form-item">
        <label for="code" style="top: 183px">输入验证码</label>
        <span>{{codeMsg}}</span>
        <input type="text" id="code" name="code" v-model="code" style="top: 219px" @blur="checkCode"/>
        <button id="send-code" @click="sendCode">发送验证码</button>
      </div>
      <div class="form-item">
        <label for="password" style="top: 294px">输入密码</label>
        <input type="password" id="password" name="password" v-model="password" style="top: 330px"/>
      </div>
      <button id="register" @click="submit">注册并登录</button>
      <span id="to-login" @click="toLogin">已有账号？点此登录</span>
    </div>
  </div>
</template>

<script>
import {
  addUserByEmail,
  addUserByTel,
  checkCodeToEmail,
  checkCodeToTel,
  sendCodeToEmail,
  sendCodeToTel
} from "@/network/register";

export default {
  name: "Register",
  data() {
    return {
      tel: '',
      email: '',
      code: '',
      password: '',
      isTel: true,
      codeStatus: 0
    }
  },
  methods: {
    switchToTel() {
      this.isTel = true
      this.reset()
    },
    switchToEmail() {
      this.isTel = false
      this.reset()
    },
    submit() {
      if (this.codeStatus === 4) {
        if (this.isTel) {
          addUserByTel(this.tel, this.password).then(res => {
            const response = JSON.parse(res)
            if (response[0] === 200) {
              this.$router.replace('/desktop')
            } else {
              console.log(res)
            }
          }).catch(err => {
            console.log(err)
          })
        } else {
          addUserByEmail(this.email, this.password).then(res => {
            const response = JSON.parse(res)
            if (response[0] === 200) {
              this.$router.replace('/desktop')
            } else {
              console.log(res)
            }
          }).catch(err => {
            console.log(err)
          })
        }
      }
    },
    sendCode() {
      if (this.isTel) {
        if((/^1[3456789]\d{9}$/.test(this.tel))) {
          this.codeStatus = 2
          sendCodeToTel(this.tel).then(res => {
            console.log(res)
          }).catch(err => {
            console.log(err)
          })
        } else {
          this.codeStatus = 1;
        }
      } else {
        sendCodeToEmail(this.email).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }
    },
    checkCode() {
      if (this.codeStatus === 2 || this.codeStatus === 3) {
        if (this.isTel) {
          checkCodeToTel(this.tel, this.code).then(res => {
            console.log(res)
          }).catch(err => {
            console.log(err)
          })
        } else {
          checkCodeToEmail(this.email, this.code).then(res => {
            console.log(res)
          }).catch(err => {
            console.log(err)
          })
        }
      }
    },
    reset() {
      this.tel = ''
      this.email = ''
      this.code = ''
      this.password = ''
      this.codeStatus = 0
    },
    toLogin() {
      this.$router.push('/login');
    }
  },
  computed: {
    telColor() {
      if (this.isTel) {
        return {color: '#606060'}
      } else {
        return {color: '#CFCFCF'}
      }
    },
    emailColor() {
      if (this.isTel) {
        return {color: '#CFCFCF'}
      } else {
        return {color: '#606060'}
      }
    },
    codeMsg() {
      if (this.codeStatus === 1) {
        return '手机号或邮箱不合法'
      } else if (this.codeStatus === 2) {
        return '发送成功'
      } else if (this.codeStatus === 3) {
        return '验证码输入有误'
      } else if (this.codeStatus === 4) {
        return '验证通过'
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  min-height: calc(100vh - 60px);
  background-color: rgba(242, 244, 244, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
}

.title {
  padding: 20px;
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica,
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 41px;
  line-height: 54px;
  color: #616161;
}

.register-form {
  height: 591px;
  width: 720px;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 10px;
}

.register-form input {
  width: 508px;
  height: 60px;
  left: calc(50% - 508px/2 - 4px);
  position: absolute;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.05), 0 4px 4px rgba(0, 0, 0, 0.05);
}

.register-form input:hover {
  border: 1px solid #54A293;
  background-color: #F2F4F4;
}

.register-form input:focus {
  outline: none;
  border: 1px solid #54A293;
  background-color: #F2F4F4;
}

.register-form label {
  left: calc(50% - 310px/2 - 103px);
  position: absolute;
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica,
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #606060;
}

.register-form button {
  position: absolute;
  background-color: #54A293;
  border: none;
  border-radius: 5px;
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica,
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #FFFFFF;
}

.register-form button:hover {
  background-color: #368375;
}

.register-form button:active {
  background-color: #368375;
  color: #FFF492;
}

#register {
  width: 508px;
  height: 60px;
  left: calc(50% - 508px/2 - 4px);
  top: 424px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 25px;
  line-height: 33px;
}

#send-code {
  width: 109px;
  height: 34px;
  left: calc(50% - 109px/2 + 186px);
  top: 232px;
  font-size: 16px;
  line-height: 21px;
  z-index: 20;
}

#to-login {
  position: absolute;
  width: 182px;
  height: 24px;
  left: calc(50% - 182px/2);
  bottom: 50px;
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica,
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #62AAFF;
}

#to-login:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>