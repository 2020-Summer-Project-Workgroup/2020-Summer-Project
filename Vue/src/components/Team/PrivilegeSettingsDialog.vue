<template>
  <div class="ManageMemberDialog" v-if="bol_ManageMember" @click="close1">
    <div class="ManageMemberBox" @click.stop="">
      <div id="PrivilegeSettings-close">
        <i class="el-icon-circle-close" ></i>
      </div>
      <div class="PrivilegeSettingsHead">
        这是文件名
      </div>
      <div>
        <input type="radio" name="Privilege" id="JustMyTeam" value="0">
        <label for="JustMyTeam">
          <span>
            <span>

            </span>
          </span>
        </label>
        <span class="OutOrInchosen1" >
          仅团队内访问
        </span>
        <input type="radio" name="Privilege" id="OpenOutside" value="1">
        <label for="OpenOutside">
          <span>
            <span>

            </span>
          </span>
        </label>
        <span class="OutOrInchosen2">
          向团队外开放
        </span>
      </div>
      <tr id="line">
        <td>
          <hr size="1px" color="#CFCFCF" width="100%"/>
        </td>
      </tr>


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
      radio: '1',
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
.ManageMemberDialog{
  position: fixed;
  width: 536px;
  height: 394px;

  background: #FFFFFF;
  /* 弹窗阴影 */

  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  left:36.14vw;
  top:23.21vh;
}
.PrivilegeSettingsHead{
  position: absolute;
  width: 397px;
  height: 51px;
  left: 58px;
  top: 44px;

  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 37px;
  /* 深灰 */
  color: #616161;
}
#JustMyTeam{
  position: absolute;
  width: 123px;
  height: 17px;
  left: 2px;
  top: 96px;
}
#OpenOutside{
  position: absolute;
  width: 123px;
  height: 17px;
  left: 140px;
  top: 96px;
}
.OutOrInchosen1{
  position: absolute;
  width: 103px;
  height: 17px;
  left: 83px;
  top: 96px;
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #616161;
}
.OutOrInchosen2{
  position: absolute;
  width: 103px;
  height: 17px;
  left: 222px;
  top: 96px;

  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;

  /* 深灰 */

  color: #616161;
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
  font-family: SimHei;
  font-style: normal;
  font-weight: normal;
  font-size: 2.54vh;
  line-height: 2.88vh;

  color: #FFFFFF;
  border:none;
}
#PrivilegeSettings-close{
  position: absolute;
  width: 1.82vw;
  height: 1.82vh;
  right:1vw;
  top: 0.5vh;
  font-size: 4.04vh;
  /* 浅灰 */
  color: #CFCFCF;
}
#line{
  position: absolute;
  width: 411.35px;
  height: 0px;
  left: 58.65px;
  top: 133px;
  border: 1px solid #CFCFCF;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
</style>