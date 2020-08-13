<template>
  <div class="main-bar">
    <img id="logo" src="~assets/pinetree.png">
    <span id="title">轻松文档</span>
    <SearchBar/>
    <UserIcon @click="openUserSpace"/>
  </div>
</template>

<script>
import SearchBar from "components/tabBar/SearchBar";
import UserIcon from "@/components/tabBar/UserIcon";
export default {
  components: {UserIcon, SearchBar},
  methods: {
    openUserSpace() {
      this.$store.commit('openUserSpace')
    }
  }
}
</script>

<style scoped>
.main-bar {
  height: 68px;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  background: #FFFFFF;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
}

#logo {
  position: absolute;
  left: 1.98vw;
  top: 18px;
  width: 25px;
  height: 25px;
}

#title {
  position: absolute;
  width: 158px;
  height: 45px;
  left: 74px;
  top: calc(50% - 22px);
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  color: #B3D3CE;
}
</style>