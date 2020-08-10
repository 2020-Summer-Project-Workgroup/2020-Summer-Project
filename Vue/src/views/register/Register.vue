<template>
  <div class="register-container">
    <div class="title">
      <span>注册</span>
    </div>
    <div class="register-form">
      <input type="text" placeholder="username"/>
      <input type="text" placeholder="验证码"/>
      <input type="password" placeholder="password"/>
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

</style>