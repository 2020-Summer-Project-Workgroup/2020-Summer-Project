<template>
  <div class="main-bar">
    <div class="logo">
      <span>Casual doc</span>
    </div>
    <div class="login-bar">
      <TabBarItem link="/login">
        <span>登录</span>
      </TabBarItem>
      <span>|</span>
      <TabBarItem link="/register">
        <span>注册</span>
      </TabBarItem>
    </div>
  </div>
</template>

<script>
import TabBarItem from "@/component/tarBar/TabBarItem";
export default {
  name: "TabBar",
  components: {TabBarItem}
}
</script>

<style scoped>
.main-bar {
  height: 5rem;
  width: 100vw;
  color: #ccc;
  box-shadow: 0 2px 1px rgba(255, 255, 255, .15);
  top: 0;
  position: absolute;
}

.main-bar .logo {
  height: 5rem;
  width: 25vw;
  top: 0;
  left: 15vw;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
}

.main-bar .login-bar {
  height: 5rem;
  width: 45vw;
  top: 0;
  left: 15vw;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-content: center;
}
</style>