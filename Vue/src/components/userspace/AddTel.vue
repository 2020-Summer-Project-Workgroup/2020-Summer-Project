<template>
  <div v-if="showAddTel" id="add-tel-container">
    <div id="add-tel">
      <i class="el-icon-circle-close" id="close-add-tel" @click="close"></i>
      <span class="text-link" id="to-user-space" @click="toUserSpace">>>个人信息</span>
      <div class="form-item">
        <label for="tel" style="top: 12.52%">输入手机号</label>
        <input type="text" id="tel" name="tel" v-model="tel" style="top: 18.49%"/>
      </div>
      <div class="form-item">
        <label for="code" style="top: 32.45%">输入验证码</label>
        <span class="code-message" :style="codeMsgColor">{{codeMsg}}</span>
        <input type="password" id="code" name="code" v-model="code" style="top: 38.94%" @blur="checkCode"/>
        <button id="send-code" @click="sendCode">发送验证码</button>
      </div>
      <div class="form-item">
        <label for="password-confirm" style="top: 52.76%">密码确认</label>
        <input type="password" id="password-confirm" name="password" v-model="password" style="top: 58.67%"/>
      </div>
      <button id="confirm" @click="submit">完成修改</button>
    </div>
  </div>
</template>

<script>
import {checkCodeToTel, sendCodeToTel} from "@/network/register";

export default {
  name: "AddTel",
  data() {
    return {
      tel: '',
      code: '',
      password: '',
      codeStatus: 0
    }
  },
  methods: {
    toUserSpace() {
      this.$store.commit('addTelToUserSpace')
      this.reset()
    },
    close() {
      this.$store.commit('closeAddTel')
      this.reset()
    },
    reset() {
      this.tel = ''
      this.code = ''
      this.password = ''
      this.codeStatus = 0
    },
    submit() {
      if (this.codeStatus === 4) {
        if (this.password === this.$store.getters.password) {
          this.$store.dispatch('updateTel').then(res => {
            if (res === 'Yes') {
              this.$message({
                message: '修改成功！',
                type: 'success'
              })
              this.$store.commit('updateTel', this.tel)
            } else {
              this.$message.error('网络错误，修改失败！')
            }
          }).catch(err => {
            console.log(err)
          })
        } else {
          this.$message.error('密码错误！')
        }
      }
    },
    sendCode() {
      if((/^1[3456789]\d{9}$/.test(this.tel))) {
        sendCodeToTel(this.tel).then(res => {
          console.log(res)
          console.log(typeof res)
          if (res === "Yes") {
            this.codeStatus = 2
          } else {
            this.codeStatus = 3
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.codeStatus = 1
      }
    },
    checkCode() {
      if (this.codeStatus === 2 || this.codeStatus === 5 || this.codeStatus === 7) {
        checkCodeToTel(this.tel, this.code).then(res => {
          console.log(res)
          if (res === "Yes") {
            this.codeStatus = 4
          } else {
            if (res === "No") {
              this.codeStatus = 5
            } else {
              this.codeStatus = 7
            }
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }
  },
  computed: {
    showAddTel() {
      return this.$store.getters.showAddTel
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
      } else if (this.codeStatus === 7) {
        return '验证码验证失败'
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
#add-tel-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(207, 207, 207, 0.3);
  z-index: 30;
}

#add-tel-container i {
  position: absolute;
}

#add-tel-container i:hover {
  cursor: pointer;
}

#add-tel {
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

#close-add-tel {
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

#send-code {
  width: 95px;
  right: 16.29%;
  top: 41.38%;
  bottom: 52.52%;
  font-size: 16px;
  line-height: 21px;
  z-index: 20;
}

.code-message {
  right: 16%;
  top: 32.3%;
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