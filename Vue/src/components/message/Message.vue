<template>
  <div id="message-page">
    <MessageTabBar/>
    <router-view/>
  </div>
</template>

<script>
import MessageTabBar from "@/components/message/MessageTabBar";
export default {
  name: "Message",
  components: {MessageTabBar}
}
</script>

<style scoped>
#message-page {
  position: absolute;
  left:17.6vw;
  bottom: 0;
  width: 62.5vw;
  height: calc(100vh - 68px);
  background-color: rgba(242, 244, 244, 1);
}
</style>