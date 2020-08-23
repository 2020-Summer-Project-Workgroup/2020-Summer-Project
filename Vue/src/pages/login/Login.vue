<template>
  <div class="login-container">
    <div class="title">
      <span>登录</span>
    </div>
    <div class="login-form">
      <div class="form-item">
        <div v-if="isTel">
          <label for="tel" style="top: 11.14%">
            <span :style="telColor" @click="switchToTel">输入手机</span>
            /
            <span :style="emailColor" @click="switchToEmail">邮箱</span>
          </label>
          <input type="text" id="tel" name="tel" v-model="tel" style="top: 19.03%"/>
        </div>
        <div v-else>
          <label for="email" style="top: 11.14%">
            <span :style="telColor" @click="switchToTel">输入手机</span>
            /
            <span :style="emailColor" @click="switchToEmail">邮箱</span>
          </label>
          <input type="text" id="email" name="username" v-model="email" style="top: 19.03%"/>
        </div>
      </div>
      <div class="form-item">
        <label for="password" style="top: 35.83%">输入密码</label>
        <input type="password" id="password" name="password" v-model="password" style="top: 44.08%"/>
      </div>
      <button id="login" @click="submit">登录CasualDoc</button>
      <span class="text-link" id="to-register" @click="toRegister">新用户注册</span>
    </div>
  </div>
</template>

<script>
import {loginByEmail, loginByTel} from "@/network/login";

export default {
  name: "Login",
  data() {
    return {
      isTel: true,
      tel: '',
      email: '',
      password: '',
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
    reset() {
      this.tel = ''
      this.email = ''
      this.password = ''
    },
    toRegister() {
      this.$router.push('/register');
    },
    // 网络请求方法
    submit() {
      if (this.isTel) {
        loginByTel(this.tel, this.password).then(res => {
          console.log(res)
          if (res === "Yes") {
            sessionStorage.setItem('tel', this.tel)
            sessionStorage.setItem('email', this.email)
            this.$router.replace('/desktop')
          } else if (res === "No") {
            this.$message.error('手机号或密码错误！')
          } else {
            this.$message.error('网络错误！')
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        loginByEmail(this.email, this.password).then(res => {
          console.log(res)
          if (res === "Yes") {
            sessionStorage.setItem('tel', this.tel)
            sessionStorage.setItem('email', this.email)
            this.$router.replace('/desktop')
          } else if (res === "No") {
            this.$message.error('邮箱或密码错误！')
          } else {
            this.$message.error('网络错误！')
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
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
    }
  }
}
</script>

<style scoped>
.login-container {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-image: url("~assets/background.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
}

.title {
  padding: 20px;
  position: relative;
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica,
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 41px;
  line-height: 54px;
  color: #616161;
}

.login-form {
  width: 32.81vw;
  height: 55.43vh;
  padding: 0;
  margin: 0;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 10px;
}

input {
  width: 70.55%;
  height: 11.65%;
  left: 15.28%;
  position: absolute;
  font-size: 20px;
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica,
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.05), 0 4px 4px rgba(0, 0, 0, 0.05);
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
  left: 15.28%;
  position: absolute;
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica,
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #606060;
}

button {
  position: absolute;
  border: none;
  border-radius: 5px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%,
  rgba(255, 255, 255, 0) 100%), #54A293;
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica,
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
  color: #FFF492;
}

#login {
  width: 70.55%;
  left: 15.28%;
  top: 66.02%;
  bottom: 22.33%;
  font-size: 25px;
  line-height: 33px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
}

.text-link {
  left: calc(50% - 50px);
  top: 85.63%;
  bottom: 8.75%;
  position: absolute;
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica,
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #62AAFF;
}

.text-link:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>