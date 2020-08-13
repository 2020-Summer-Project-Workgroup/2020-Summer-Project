<template>
  <div class="main-bar">
    <div class="logo">
      <span>Casual doc</span>
    </div>
    <div class="login-bar">
      <TabBarItem link="/login">
        <span>登录</span>
      </TabBarItem>
      <span class="split">|</span>
      <TabBarItem link="/register">
        <span>注册</span>
      </TabBarItem>
    </div>
  </div>
</template>

<script>
import TabBarItem from "@/components/tarBar/TabBarItem";
export default {
  name: "TabBar",
  components: {TabBarItem}
}
</script>

<style scoped>
.main-bar {
  height: 5rem;
  width: 100vw;
  background-color: #ccc;
  box-shadow: 0 2px 1px rgba(255, 255, 255, .15);
  top: 0;
  position: absolute;
}

.main-bar .logo {
  height: 5rem;
  width: 25vw;
  font-size: 1.5rem;
  top: 0;
  left: 15vw;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.main-bar .logo span{
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.main-bar .login-bar {
  height: 5rem;
  width: 45vw;
  top: 0;
  right: 15vw;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.split {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
</style>