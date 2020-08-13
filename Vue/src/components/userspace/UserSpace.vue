<template>
  <div v-if="showUserSpace" id="user-space">
    <span class="text-link" id="close" @click="close">X</span>
    <span class="text-link" id="to-change-password" @click="toChangePassword">>>修改密码</span>
    <div id="info">
      <h2 id="title">用户空间</h2>
      <span id="tel">手机号：15911103365</span>
      <br/>
      <span id="email">邮箱：h56983577@126.com</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSpace",
  methods: {
    toChangePassword() {
      this.$store.commit('userSpaceToChangePassword')
    },
    close() {
      this.$store.commit('closeUserSpace')
    }
  },
  computed: {
    showUserSpace() {
      return this.$store.getters.showUserSpace
    }
  }
}
</script>

<style scoped>
#user-space {
  position: absolute;
  width: 29.22vw;
  height: 57.08vh;
  left: 35.42vw;
  top: 18.61vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
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

#to-change-password {
  left: calc(78.73% - 50px);
  top: 6.25%;
  bottom: 88.48%;
  position: absolute;
}

#close {
  top: 0;
  right: 0;
  position: absolute;
}
</style>