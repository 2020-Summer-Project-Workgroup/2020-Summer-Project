<template>
  <div class="login-container">
    <div class="title">
      <span>登录</span>
    </div>
    <div class="login-form">
      <input type="text" placeholder="username" v-model="username"/>
      <input type="password" placeholder="password" v-model="password"/>
      <button @click="submit">登录</button>
    </div>
  </div>
</template>

<script>
import {checkInformation} from "@/network/login";

export default {
  name: "Login",
  data() {
    return {
      isTel: true,
      tel: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submit() {
      checkInformation(this.username, this.password).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
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
  position: fixed;
  background-image: linear-gradient(to right, #A2A8B8, #CED6EB);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
}

.title {
  font-size: 2rem;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.login-form {
  height: 40vh;
  width: 30vw;
  padding: 20px;
  border-radius: 16px;
  border: none;
  background-color: #ccc;
  box-shadow: -8px -8px 4px rgb(255, 255, 255),
              8px 8px 4px rgba(0, 0, 0, .15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>