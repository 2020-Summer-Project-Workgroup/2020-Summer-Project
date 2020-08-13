<template>
  <div id="user-icon">
    <img src="~assets/logo.png">
  </div>
</template>

<script>
export default {
  name: "UserIcon",
  data() {
    return {
      url: ''
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