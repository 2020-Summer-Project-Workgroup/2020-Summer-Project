<template>
  <div class="ManageMemberDialog" v-if="bol_ManageMember" @click="close1">
    <div class="ManageMemberBox" @click.stop="">
      <div id="ManageMember-close">
        <i class="el-icon-circle-close" ></i>
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
      <div class="DeleteArea">
          <span class="DeleteAreaFont">
            拖拽至此删除
          </span>
      </div>
      <button class="InviteButton" @click="cl_invite" >
        邀请
      </button>

      <button class="ManageMemberACButton" >
        确认
      </button>
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
    cl3(){
      this.bol_ManageMember = true;
    },
    close3(){
      this.bol_ManageMember = false;
    },
  },
};
</script>

<style scoped>
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
  height:12.81vh;

}
.ManageMemberBody{
  position: absolute;
  width: 18.38vw;
  height: 17.55vh;
  left:3.02vw;
  top:20.5vh;

}
#line_co{
  position: absolute;
  width: 18.36vw;
  height: 0px;
  top:3.69vh;
  border: 1px solid #CFCFCF;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#line_manage{
  position: absolute;
  width: 18.36vw;
  height: 0px;
  top:3.69vh;
  border: 1px solid #CFCFCF;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.DeleteArea{
  position: absolute;
  width: 18.38vw;
  height: 5.08vh;
  left: 3.1vw;
  top:39.2vh;
  text-align: center;
  align-content: center;
  align-items: center;
  /* 浅绿 */

  background: #F2F4F4;
}
.DeleteAreaFont{
  position: absolute;
  width: 10.13vw;
  height: 2.88vh;
  left: 4.20vw;
  top: 1.15vh;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.54vh;
  line-height: 2.88vh;
  /* identical to box height */
  /* 浅灰 */
  color: #CFCFCF;
  text-align: center;
  align-content: center;
  align-items: center;

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