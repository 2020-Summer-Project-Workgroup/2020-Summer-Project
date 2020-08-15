<template>
  <div id="user-icon" @click="openUserSpace">
    <el-avatar v-if="avatar!=null" :src="avatar"></el-avatar>
    <el-avatar v-else icon="el-icon-user-solid"></el-avatar>
  </div>
</template>

<script>
export default {
  name: "UserIcon",
  data() {
    return {
      url: ''
    }
  },
  methods: {
    openUserSpace() {
      this.$store.commit('openUserSpace')
    }
  },
  computed: {
    avatar() {
      // return require("@/assets/picture.jpeg")
      return null;
    }
  }
}
</script>

<style scoped>
#user-icon {
  position: absolute;
  right: 1.15vw;
  top: 14px;
}

#user-icon:hover {
  cursor: pointer;
  opacity: 50%;
}
</style>