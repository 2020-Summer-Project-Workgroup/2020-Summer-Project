<template>
  <div class="register-container">
    <div class="title">
      <span>注册</span>
    </div>
    <div class="register-form">
      <div class="form-item">
        <div v-if="isTel">
          <label for="tel" style="top: 11.97%">
            <span :style="telColor" @click="switchToTel">输入手机</span>
            /
            <span :style="emailColor" @click="switchToEmail">邮箱</span>
          </label>
          <input type="text" id="tel" name="username" v-model="tel" style="top: 17.6%"/>
        </div>
        <div v-else>
          <label for="email" style="top: 10.97%">
            <span :style="telColor" @click="switchToTel">输入手机</span>
            /
            <span :style="emailColor" @click="switchToEmail">邮箱</span>
          </label>
          <input type="text" id="email" name="username" v-model="email" style="top: 17.6%"/>
        </div>
      </div>
      <div class="form-item">
        <label for="code" style="top: 30.93%">输入验证码</label>
        <span class="code-message" :style="codeMsgColor">{{codeMsg}}</span>
        <input type="text" id="code" name="code" v-model="code" style="top: 37.06%" @blur="checkCode"/>
        <button id="send-code" @click="sendCode">发送验证码</button>
      </div>
      <div class="form-item">
        <label for="password" style="top: 50.26%">输入密码</label>
        <input type="password" id="password" name="password" v-model="password" style="top: 55.84%"/>
      </div>
      <button id="register" @click="submit">注册并登录</button>
      <span class="text-link" @click="toLogin">已有账号？点此登录</span>
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
      if (!this.isTel) {
        this.isTel = true
        this.reset()
      }
    },
    switchToEmail() {
      if (this.isTel) {
        this.isTel = false
        this.reset()
      }
    },
    submit() {
      if (this.codeStatus === 4) {
        if (this.isTel) {
          addUserByTel(this.tel, this.password).then(res => {
            if (res instanceof Object) {
              if (JSON.parse(res)[0] === 200) {
                this.$router.replace('/desktop')
              } else {
                console.log(res)
                // need to negotiate.
              }
            } else {
              // need to negotiate.
            }
          }).catch(err => {
            console.log(err)
          })
        } else {
          addUserByEmail(this.email, this.password).then(res => {
            if (res instanceof Object) {
              if (JSON.parse(res)[0] === 200) {
                this.$router.replace('/desktop')
              } else {
                console.log(res)
                // need to negotiate.
              }
            } else {
              // need to negotiate.
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
          sendCodeToTel(this.tel).then(res => {
            console.log(res)
            if (res instanceof Object) {
              if (JSON.parse(res)[0] === 200) {
                this.codeStatus = 2
              } else {
                this.codeStatus = 3
              }
            } else {
              this.codeStatus = 3
            }
          }).catch(err => {
            console.log(err)
          })
        } else {
          this.codeStatus = 1
        }
      } else {
        if (/^([a-zA-Z\d])(\w|-)+@[a-zA-Z\d]+(\.[a-zA-Z]{2,4})+$/.test(this.email)) {
          sendCodeToEmail(this.email).then(res => {
            console.log(res)
            if (res instanceof Object) {
              if (JSON.parse(res)[0] === 200) {
                this.codeStatus = 2
              } else {
                this.codeStatus = 3
              }
            } else {
              this.codeStatus = 3
            }
          }).catch(err => {
            console.log(err)
          })
        } else {
          this.codeStatus = 1
        }
      }
    },
    checkCode() {
      if (this.codeStatus === 2 || this.codeStatus === 3) {
        if (this.isTel) {
          checkCodeToTel(this.tel, this.code).then(res => {
            console.log(res)
            if (res instanceof Object) {
              if (JSON.parse(res)[0] === 200) {
                this.codeStatus = 4
              } else {
                this.codeStatus = 5
              }
            } else {
              this.codeStatus = 3
            }
          }).catch(err => {
            console.log(err)
          })
        } else {
          checkCodeToEmail(this.email, this.code).then(res => {
            console.log(res)
            if (res instanceof Object) {
              if (JSON.parse(res)[0] === 200) {
                this.codeStatus = 4
              } else {
                this.codeStatus = 5
              }
            } else {
              this.codeStatus = 3
            }
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
        return '发送失败'
      } else if (this.codeStatus === 4) {
        return '验证通过'
      } else if (this.codeStatus === 5) {
        return '验证码输入有误'
      } else {
        return ''
      }
    },
    codeMsgColor() {
      if (this.codeStatus % 2 === 0) {
        return {color: '#54A293'}
      } else {
        return {color: '#FF4747'}
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-image: url("~assets/background.png");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
}

.title {
  padding: 20px;
  position: relative;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 41px;
  line-height: 54px;
  color: #616161;
  z-index: 5;
}

.register-form {
  width: 32.81vw;
  height: 62.12vh;
  padding: 0;
  margin: 0;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 10px;
  z-index: 0;
}

input {
  width: 70.55%;
  height: 10.15%;
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
  background-color: #368375;
}

button:active {
  outline: none;
  background-color: #368375;
}

#register {
  width: 70.56%;
  left: 14.17%;
  top: 71.74%;
  bottom: 18.1%;
  font-size: 25px;
  line-height: 33px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
  z-index: 5;
}

#send-code {
  width: 95px;
  left: calc(83.33% - 95px);
  top: 39.25%;
  bottom: 54.99%;
  font-size: 16px;
  line-height: 21px;
  z-index: 20;
}

.code-message {
  right: 16%;
  top: 30.3%;
  bottom: 65.99%;
  position: absolute;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  z-index: 12;
}

.text-link {
  left: calc(50% - 91px);
  top: 87.73%;
  bottom: 7.81%;
  position: absolute;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #62AAFF;
  z-index: 12;
}

.text-link:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>