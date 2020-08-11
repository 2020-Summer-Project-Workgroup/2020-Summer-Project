<template>
  <div class="register-container">
    <div class="title">
      <span>注册</span>
    </div>
    <div class="register-form">
      <div class="form-item">
        <label for="username" style="top: 70px">输入手机/邮箱</label>
        <input type="text" id="username" name="username" style="top: 104px"/>
      </div>
      <div class="form-item">
        <label for="code" style="top: 183px">输入验证码</label>
        <input type="text" id="code" name="code" style="top: 219px"/>
      </div>
      <div class="form-item">
        <label for="password" style="top: 294px">输入密码</label>
        <input type="password" id="password" name="password" style="top: 330px"/>
      </div>
      <button @click="submit">注册并登录</button>
      <span>已有账号？点此登录</span>
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
  "PingFang SC", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
  "PingFang SC", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #606060;
}

.register-form button {
  width: 508px;
  height: 60px;
  left: calc(50% - 508px/2 - 4px);
  top: 424px;
  position: absolute;
  background: #54A293;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 5px;
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica,
  "PingFang SC", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 33px;
  color: #FFFFFF;
}

.register-form span {
  position: absolute;
  width: 182px;
  height: 24px;
  left: calc(50% - 182px/2);
  bottom: 50px;
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica,
  "PingFang SC", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #62AAFF;
}
</style>