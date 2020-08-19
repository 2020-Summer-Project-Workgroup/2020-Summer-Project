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
    <TeamRightSideBar/>
    <CreateTeamDialog/>
    <PrivilegeSettingsDialog/>
    <ManageMemberDialog/>
    <Invite/>
  </div>
</template>

<script>
import TabBar from "@/components/tabBar/TabBar";
import UserSpace from "@/components/userspace/UserSpace";
import ChangePassword from "@/components/userspace/ChangePassword";
import LeftSideBar from "@/components/leftSideBar/LeftSideBar";
import AddEmail from "@/components/userspace/AddEmail";
import AddTel from "@/components/userspace/AddTel";
import Invite from "@/components/Team/Invite";
import TeamRightSideBar from "@/components/Team/TeamRightSideBar";
import CreateTeamDialog from "@/components/Team/CreateTeamDialog";
import ManageMemberDialog from "@/components/Team/ManageMemberDialog";
import PrivilegeSettingsDialog from "@/components/Team/PrivilegeSettingsDialog";
export default {
  name: "Desktop",
  components: {
    PrivilegeSettingsDialog,
    ManageMemberDialog,
    CreateTeamDialog, TeamRightSideBar, AddTel, AddEmail,
    LeftSideBar, ChangePassword, UserSpace, TabBar, Invite}
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