<template>
  <div id="user-icon">
    <img src="~assets/picture.jpeg" @click="openUserSpace">
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
  }
}
</script>

<style scoped>
#user-icon {
  position: absolute;
  right: 1.15vw;
  top: 14px;
}

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>