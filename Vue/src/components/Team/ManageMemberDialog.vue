<template>
  <div class="popup-container" v-if="showManageMember">
    <div class="ManageMemberDialog">
      <div class="ManageMemberBox">
        <div id="ManageMember-close" @click="close">
          <i class="el-icon-circle-close"></i>
        </div>

        <div class="ManageMemberHead">
          <span class="ManageMemberFont">
            协作者
          </span>
          <tr id="line_co">
            <td>
              <hr size="1px" color="#CFCFCF" width="100%"/>
            </td>
          </tr>
        </div>

        <div class="CoMember_Person">
          <div class="OneUser_ma">
            <div class="avatar">
              <el-avatar v-if="avatar!=null" :src="avatar"></el-avatar>
              <el-avatar v-else icon="el-icon-user-solid"></el-avatar>
            </div>
            <div class="UserName">
              LSSSSSSS
            </div>
            <div class="tools">
              <i class="el-icon-s-tools"></i>
            </div>
          </div>
          <div class="OneUser_ma">
            <div class="avatar">
              <el-avatar v-if="avatar!=null" :src="avatar"></el-avatar>
              <el-avatar v-else icon="el-icon-user-solid"></el-avatar>
            </div>
            <div class="UserName">
              LSSSSSSS
            </div>
            <div class="tools">
              <i class="el-icon-s-tools"></i>
            </div>
          </div>
        </div>

        <div class="ManageMemberBody">
          <span class="ManageMemberFont">
            管理者
          </span>
          <tr id="line_manage">
            <td>
              <hr size="1px" color="#CFCFCF" width="100%"/>
            </td>
          </tr>
        </div>
        <div class="ManageMember_Person">
          <div class="OneUser_co">
            <div class="avatar">
              <el-avatar v-if="avatar!=null" :src="avatar"></el-avatar>
              <el-avatar v-else icon="el-icon-user-solid"></el-avatar>
            </div>
            <div class="UserName">
              LSSSSSSS
            </div>
            <div class="tools">
              <i class="el-icon-s-tools"></i>
            </div>
          </div>
          <div class="OneUser_co">
            <div class="avatar">
              <el-avatar v-if="avatar!=null" :src="avatar"></el-avatar>
              <el-avatar v-else icon="el-icon-user-solid"></el-avatar>
            </div>
            <div class="UserName">
              LSSSSSSS
            </div>
            <div class="tools">
              <i class="el-icon-s-tools"></i>
            </div>
          </div>
          <div class="OneUser_co">
            <div class="avatar">
              <el-avatar v-if="avatar!=null" :src="avatar"></el-avatar>
              <el-avatar v-else icon="el-icon-user-solid"></el-avatar>
            </div>
            <div class="UserName">
              LSSSSSSS
            </div>
            <div class="tools">
              <i class="el-icon-s-tools"></i>
            </div>
          </div>
        </div>

        <button class="InviteButton" @click="toInvite" >
          邀请
        </button>

        <button class="ManageMemberACButton" >
          确认
        </button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data: function() {
    return {
      bol_ManageMember:true,
    };
  },
  methods: {
    toInvite() {
      this.$store.commit('changeMemberToInvite')
    },
    close() {
      this.$store.commit('closeManageMember')
    }
  },
  computed: {
    showManageMember() {
      return this.$store.getters.showManageMember
    }
  }
};
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

button:focus {
  outline: none
}

.ManageMemberDialog{
  position: fixed;
  width: 24.63vw;
  height: 53.69vh;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  left:36.14vw;
  top:23.21vh;
}
.ManageMemberBox{

}
.ManageMemberFont{
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.30vh;
  line-height: 3.00vh;
  color: #616161;
}
.ManageMemberHead{
  position:absolute;
  top:5.85vh;
  left:3.02vw;
  width:18.38vw;
  height:3.75vh;
}
.ManageMemberBody{
  position: absolute;
  width: 18.38vw;
  height: 3.75vh;
  left:3.02vw;
  top:20.5vh;
}
.CoMember_Person{
  position: absolute;
  width: 74.19%;
  height: 16.35%;
  left: 12.3%;
  top: 19.15%;
  overflow-y: auto;
}
.ManageMember_Person{
  position: absolute;
  width: 74.19%;
  height: 38%;
  left: 12.3%;
  top: 46%;
  overflow-y: auto;
}
.OneUser_ma {
  position: relative;
  top: 1px;
  width: 98%;
  height: 90%;
}
.OneUser_co{
  position: relative;
  top: 1px;
  width: 98%;
  height: 40%;
}

.UserName{
  position: absolute;
  top:15%;
  left: 25%;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  float: left;
}
#line_co{
  position: absolute;
  width: 18.36vw;
  height: 0;
  top:3.69vh;
  border: 1px solid #CFCFCF;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#line_manage{
  position: absolute;
  width: 18.36vw;
  height: 0;
  top:3.69vh;
  border: 1px solid #CFCFCF;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.tools{
  position: absolute;
  height: 40%;
  left:87%;
  font-size: 20px;
  top:15%;
}

.avatar{
  position: absolute;
  top:7%;
  height: 70%;
  width: 16%;
}

.InviteButton{
  position: absolute;
  width: 6.66vw;
  height: 4.15vh;
  left:3.02vw;
  top:46.65vh;
  /* 白_渐变 */
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #E5E5E5;
  /* 浅灰 */
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.54vh;
  line-height: 2.88vh;
  /* 深灰 */
  color: #616161;
  border:none;
}
.ManageMemberACButton{
  position: absolute;
  width: 6.66vw;
  height: 4.15vh;
  left: 14.89vw;
  top:46.65vh;
  /* 按钮绿_渐变 */
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #54A293;
  border-radius: 5px;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.54vh;
  line-height: 2.88vh;

  color: #FFFFFF;
  border:none;
}

.InviteButton:hover {
  cursor: pointer;
  background: #E5E5E5;
}

.ManageMemberACButton:hover {
  cursor: pointer;
  background: #54A193;
}

#ManageMember-close{
  position: absolute;
  width: 1.82vw;
  height: 1.82vh;
  right:1vw;
  top: 0.5vh;
  font-size: 4.04vh;
  /* 浅灰 */
  color: #CFCFCF;
}
</style>