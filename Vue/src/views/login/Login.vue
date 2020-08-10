<template>
  <div class="login-container">
    <div class="title">
      <span>登录</span>
    </div>
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login"
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