<template>
  <div v-if="showUserSpace" id="user-space">
    <h1>这是用户空间</h1>
  </div>
</template>

<script>
export default {
  name: "UserSpace",
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
  background: #FFFFFF;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
</style>