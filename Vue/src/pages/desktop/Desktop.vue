<template>
  <div class="desktop">
    <TabBar/>
    <UserSpace/>
    <ChangePassword/>
    <LeftSideBar/>
    <FileList/>
    <RightSideBar/>
  </div>
</template>

<script>
import TabBar from "@/components/tabBar/TabBar";
import UserSpace from "@/components/userspace/UserSpace";
import ChangePassword from "@/components/userspace/ChangePassword";
import LeftSideBar from "@/components/leftSideBar/LeftSideBar";
import RightSideBar from "@/components/rightSideBar/RightSideBar";
import FileList from "@/components/fileList/FileList";
export default {
  name: "Desktop",
  components: {FileList, RightSideBar, LeftSideBar, ChangePassword, UserSpace, TabBar}
}
</script>

<style scoped>
.desktop {
  background-color: #E5E5E5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>