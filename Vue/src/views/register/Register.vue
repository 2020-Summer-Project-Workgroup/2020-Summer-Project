<template>
  <div class="register-container">
    <div class="title">
      <span>注册</span>
    </div>
    <div class="register-form">
      <div class="form-item">
        <label for="username">输入手机/邮箱</label>
        <input type="text" id="username" name="username"/>
      </div>
      <div class="form-item">
        <label for="code">输入验证码</label>
        <input type="text" id="code" name="code"/>
      </div>
      <div class="form-item">
        <label for="password">输入密码</label>
        <input type="password" id="password" name="password"/>
      </div>
      <button @click="submit">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods: {
    submit() {

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
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica, "PingFang SC", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.register-form {
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

.register-form .form-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.register-form input {
  width: 26.46vw;
  height: 60px;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.05), 0 4px 4px rgba(0, 0, 0, 0.05);
}

.register-form label {
  width: 224px;
  height: 40px;
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica, "PingFang SC", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #606060;
}
</style>