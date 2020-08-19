<template>
  <div class="popup-container" v-if="showCreateTeam">
    <div class="CreateTeamDialog" >
      <i class="el-icon-circle-close" id="close-create-team" @click="close"></i>
      <div class="CreateTeamBox">
        <div class="NewTeamHead">
          <span class="NewTeamHeadFont">
            新建团队
          </span>
        </div>
        <input type="text" value="请输入团队名称" class="InputCreateTeam">
        <button class="CreateTeamButton" >
          新建
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    close() {
      this.$store.commit('closeCreateTeam')
    }
  },
  computed: {
    showCreateTeam() {
      return this.$store.getters.showCreateTeam
    }
  }
}
</script>

<style scoped>
.popup-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(207, 207, 207, .3);
  z-index: 50;
}
.popup-container i:hover {
  cursor: pointer;
}

#close-create-team {
  position: absolute;
  right: 5.26%;
  top: 4.86%;
  font-size: 30px;
  color: #CFCFCF;
}

button:focus {
  outline: none
}
.CreateTeamDialog{
  position: fixed;
  width: 32.23vw;
  height: 29.67vh;
  background: #FFFFFF;
  /* 弹窗阴影 */
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  left: 33.85vw;
  top:24.24vh;
}

.CreateTeamBox{
  background: #ffffff;
  padding: 40px;
  border-radius: 8px;
}
.NewTeamHead{
  position: absolute;
  width: 14.37vw;
  height: 3.69vh;
  left: 4.06vw;
  top: 5.77vh;
}
.NewTeamHeadFont{
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 3.23vh;
  line-height: 4.26vh;
  color: #616161;
}
.InputCreateTeam{
  position: absolute;
  width:24.63vw;
  height: 5.77vh;
  left: 4.01vw;
  top: 11.66vh;
  background: #FFFFFF;
  /* 浅灰 */
  border: 1px solid #CFCFCF;
  box-sizing: border-box;
  /* 内外输入框阴影 */
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05), inset 0px 5px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.30vh;
  line-height: 3vh;
  /* identical to box height */
  /* 浅灰 */
  color: #CFCFCF;
}
.CreateTeamButton{
  position: absolute;
  width: 6.66vw;
  height: 4.15vh;
  right: 3.59vw;
  top: 20.09vh;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #54A293;
  border-radius: 5px;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.07vh;
  line-height: 2.42vh;
  color: #FFFFFF;
  border:none;
}
</style>