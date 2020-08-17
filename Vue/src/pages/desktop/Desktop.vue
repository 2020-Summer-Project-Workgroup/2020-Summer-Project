<template>
  <div class="desktop">
    <TabBar/>
    <UserSpace/>
    <ChangePassword/>
    <AddEmail/>
    <AddTel/>
    <LeftSideBar/>
    <div class="v-line" id="left-separator"></div>
    <router-view/>
    <div class="v-line" id="right-separator"></div>
    <RightSideBar/>
  </div>
</template>

<script>
import TabBar from "@/components/tabBar/TabBar";
import UserSpace from "@/components/userspace/UserSpace";
import ChangePassword from "@/components/userspace/ChangePassword";
import LeftSideBar from "@/components/leftSideBar/LeftSideBar";
import RightSideBar from "@/components/rightSideBar/RightSideBar";
import AddEmail from "@/components/userspace/AddEmail";
import AddTel from "@/components/userspace/AddTel";
export default {
  name: "Desktop",
  components: {AddTel, AddEmail, RightSideBar, LeftSideBar, ChangePassword, UserSpace, TabBar}
}
</script>

<style scoped>
.desktop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("~assets/background.png");
  background-size: cover;
}

.v-line {
  width: 1px;
  background-color: #CFCFCF;
}

.desktop #left-separator {
  position: absolute;
  top: 68px;
  bottom: 0;
  left: 17.6vw;
}

.desktop #right-separator {
  position: absolute;
  top: 68px;
  bottom: 0;
  right: 19.84vw;
}
</style>