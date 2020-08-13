<template>
  <div v-if="showChangePassword" id="change-password">
    <span class="text-link" id="close" @click="close">X</span>
    <span class="text-link" id="to-user-space" @click="toUserSpace">>>个人信息</span>
    <div class="form-item">
      <label for="old-password" style="top: 12.52%">输入旧密码</label>
      <input type="text" id="old-password" name="password" v-model="OldPassword" style="top: 18.49%"/>
    </div>
    <div class="form-item">
      <label for="new-password" style="top: 32.45%">新密码</label>
      <input type="password" id="new-password" name="password" v-model="newPassword" style="top: 38.94%"/>
    </div>
    <div class="form-item">
      <label for="password-confirm" style="top: 52.76%">密码确认</label>
      <input type="password" id="password-confirm" name="password" v-model="passwordConfirm" style="top: 58.67%"/>
    </div>
    <button id="confirm" @click="submit">完成修改</button>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      passwordConfirm: ''
    }
  },
  methods: {
    toUserSpace() {
      this.$store.commit('changePasswordToUserSpace')
    },
    close() {
      this.$store.commit('closeChangePassword')
    },
    submit() {

    }
  },
  computed: {
    showChangePassword() {
      return this.$store.getters.showChangePassword
    }
  }
}
</script>

<style scoped>
#change-password {
  position: relative;
  width: 32.81vw;
  height: 59.12vh;
  left: 33.59vw;
  top: 18.71vh;
  background: #FFFFFF;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
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

#close {
  top: 0;
  right: 0;
  position: absolute;
}
</style>