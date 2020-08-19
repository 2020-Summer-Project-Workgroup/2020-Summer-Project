<template>
  <div class="ManageMemberDialog" v-if="bol_ManageMember" @click="close1">
    <div class="ManageMemberBox" @click.stop="">
      <div id="PrivilegeSettings-close">
        <i class="el-icon-circle-close" ></i>
      </div>
      <div class="PrivilegeSettingsHead">
        这是文件名
      </div>
      <div class="choose">
        <label class="radio">仅团队内访问<input type="radio" name="radio" value="1" checked><i></i></label>
        <label class="radio">向团队外开放<input type="radio" value="2" name="radio"><i></i></label>
      </div>
      <tr id="line">
        <td>
          <hr size="1px" color="#CFCFCF" width="100%"/>
        </td>
      </tr>
      <div class="PrivilegeTableHead">
        <span class="PrivilegeTableHead-member">
          成员
        </span>
        <span class="PrivilegeTableHead-view">
          查看
        </span>
        <span class="PrivilegeTableHead-edit">
          编辑
        </span>
      </div>
<!--
      <div class="NewStyleCheckbox">
        <input type="checkbox" value="1" id="check1" name=""/>
        <label for="check1"></label>
      </div>
-->
      <div class="PrivilegeTableBody">
        <tr class="PersonHeight">
          <span class="Privilege-Username">melon1</span>
          <span class="space-NameAndView"></span>
          <input type="CheckBox" name="view" value="1" iconColor="#54A193"/>
          <span class="space-ViewAndEdit"></span>
          <input type="CheckBox" name="edit" value="2" />
        </tr>
        <tr class="PersonHeight">
          <span class="Privilege-Username">melon2</span>
          <span class="space-NameAndView"></span>
          <input type="CheckBox" name="view" value="1"/>
          <span class="space-ViewAndEdit"></span>
          <input type="CheckBox" name="edit" value="2" />
        </tr>
        <tr class="PersonHeight">
          <span class="Privilege-Username">melon3</span>
          <span class="space-NameAndView"></span>
          <input type="CheckBox" name="view" value="1"/>
          <span class="space-ViewAndEdit"></span>
          <input type="CheckBox" name="edit" value="2" />
        </tr>
        <tr class="PersonHeight">
          <span class="Privilege-Username">melon4</span>
          <span class="space-NameAndView"></span>
          <input type="CheckBox" name="view" value="1"/>
          <span class="space-ViewAndEdit"></span>
          <input type="CheckBox" name="edit" value="2" />
        </tr>
      </div>

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
      bol_ManageMember:false,
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
button:focus {
  outline: none
}
.ManageMemberDialog{
  position: fixed;
  width: 27.91vw;
  height: 45.49vh;
  background: #FFFFFF;
  /* 弹窗阴影 */
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  left:36.14vw;
  top:23.21vh;
}
.PrivilegeSettingsHead{
  position: absolute;
  width: 20.67vw;
  height: 5.88vh;
  left: 3.02vw;
  top: 5.08vh;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 3.23vh;
  line-height: 4.27vh;
  color: #616161;
}

#PrivilegeSettings-close{
  position: absolute;
  width: 1.82vw;
  height: 1.82vh;
  right:1vw;
  top: 0.5vh;
  font-size: 4.04vh;
  color: #CFCFCF;
}
#line{
  position: absolute;
  width: 21.42vw;
  height: 0;
  left: 3.05vw;
  top: 15.35vh;
  border: 1px solid #CFCFCF;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.choose {
  position: relative;
}

.choose .radio {
  position: relative;
  display: inline-block;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.84vh;
  line-height: 2.42vh;
  color: #616161;
  padding-left: 4.16vw;
  padding-top: 11.08vh;
  cursor: pointer;
}

.choose .radio input {
  position: absolute;
  left: -9999px;
}

.choose .radio i {
  display: block;
  position: absolute;
  top: 11.54vh;
  left: 3.02vw;
  width: 15px;
  height: 15px;
  outline: 0;
  border: 1px solid #e4e4e4;
  background: #ffffff;
  border-radius: 50%;
  transition: border-color .3s;
  -webkit-transition: border-color .3s;
}

.choose .radio input + i:after {
  position: absolute;
  content: '';
  top: 3px;
  left: 3px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #54A193;
  opacity: 0;
  transition: opacity .1s;
  -webkit-transition: opacity .1s;
}

.choose .radio input:checked + i:after {
  opacity: 1;
}

.PrivilegeTableHead{
  position: absolute;
  width: 21.35vw;
  height: 1.51vh;
  left: 3.07vw;
  top: 16.28vh;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.84vh;
  line-height: 2.42vh;
  color: #CFCFCF;
  /*border: 1px solid #CFCFCF;*/
}
.PrivilegeTableHead-member{
  margin-left: 3.64vw;
  padding-right: 5.20vw;
  width: 19.16vw;
  /*border: 1px solid #CFCFCF;*/
}
.PrivilegeTableHead-view{
  padding-right: 3.22vw;
  /*border: 1px solid #CFCFCF;*/
}
.PrivilegeTableHead-edit{
  padding-right: 3.22vw;
  /*border: 1px solid #CFCFCF;*/
}
.PrivilegeTableBody{
  position: absolute;
  width: 21.35vw;
  height: 17.32vh;
  margin-top: 6.92vh;
  left: 3.125vw;
  /*border: 1px solid #CFCFCF;*/
  overflow-y: auto;
}

.Privilege-Username{
  position: absolute;
  left: 4.42vw;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.84vh;
  line-height: 2.42vh;
  color: #616161;
  /*border: 1px solid #CFCFCF;*/
}
.space-NameAndView{
  display:-moz-inline-box;
  display:inline-block;
  width: 11.19vw;
}
.space-ViewAndEdit {
  display:-moz-inline-box;
  display:inline-block;
  width: 3.22vw;
}
.ManageMemberACButton{
  position: absolute;
  width: 6.66vw;
  height: 4.15vh;
  left: 17.89vw;
  top:38.5vh;
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
.PersonHeight{
  height: 8.66vh;
  text-align: center;
}
/*
.NewStyleCheckbox{
  width: 25px;
  position: relative;
  left: 220px;
  top:20px;
}

.NewStyleCheckbox label{
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: #ffffff;
  border: 1px solid #54A293;
}
.NewStyleCheckbox label:after{
  opacity: 0.2;
  content: '';
  position: absolute;
  width: 10px;
  height: 6px;
  background: transparent;
  top:4px;
  left: 4px;
  border: 3px solid #54A293;
  border-top: none;
  border-right: none;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.NewStyleCheckbox label:hover::after{
  opacity: 0.5;
}
.NewStyleCheckbox input[type=checkbox]:checked + label:after{
  opacity: 1;
}
*/
</style>