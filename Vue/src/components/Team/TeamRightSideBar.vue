<template>
  <div id="RBar">
    <button class="greenButton" @click="cl1" >
      新建
    </button>

    <br />
    <div class="button stdButton" id="from" @mouseenter="me2" @mouseleave="ml2" @click="cl2" :style="newStyle">
      <span class="text">从模板新建</span>
    </div>
    <br />
    <tr id="line">
      <td>
        <hr size="1px" color="#CFCFCF" width="100%"/>
      </td>
    </tr>
    <button class="ManageButton" id="from" @click="cl3">
      管理成员
    </button>
    <br />
    <div class="dropdown">
      <button class="dropbtn">退出团队<i class="el-icon-caret-bottom"></i></button>
      <div class="dropdown-content">
        <span class="QuitFont"><a href="#">仅自己离开</a></span>
        <span class="QuitFont"><a href="#">解散团队</a></span>
      </div>
    </div>
    <!--
    <div class="button QuitButton" id="from" @mouseenter="me4" @mouseleave="ml4" @click="cl4" :style="newStyle">
      <span class="text">退出团队</span>
    </div>
    <br />
    -->
    <div id="down" class="StdSecond">
      <span class="stdFont">最近浏览</span>
      <span id="detail">
        <a href /> 详情
      </span>
    </div>
    <div class="RightBarBottom">
      <table>
        <tbody>
        <tr v-for="file in files" :key="file.name" class="stdFont">
          <i class="el-icon-user" v-if="file.type === 1"></i>
          <i class="el-icon-user-solid" v-if="file.type === 2"></i>
          <img src="../../assets/收藏.png" v-else-if="file.type === 3" />
          {{ file.name }}
          <i class="el-icon-s-tools"></i>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data: function() {
    return {
      iconPath: "../../assets/个人.png",
      files: [{
        type: 1,  //1 代表个人文档
        name: "示例文档",
      },
        {
          type: 2,  //2 代表团队文档
          name: "LSS",
        },
        {
          type: 3,  //3 代表收藏文档
          name: "qwertyuiasdfghjkzxvcbnm",
        },
      ],
    };
  },

  methods: {

  },
};
</script>

<style scoped>
button:focus {
  outline: none
}
#RBar {
  display: -webkit-flex;
  display: flex;
  position: absolute;
  width: 19.9vw;
  height: calc(100vh - 68px);
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  border: none;
}


.button {
  width: 12.55vw;
  height: 5.54vh;
  border-radius: 5px;
  border:none;
}
.text {
  margin-top: 7.15vh;
  line-height: 5.54vh;
}

.greenButton {
  position: absolute;
  width: 12.55vw;
  height: 5.54vh;
  left: 2.7vw;
  top: 7.15vh;
  background: linear-gradient(180deg,
  rgba(255, 255, 255, 0.2) 0%,
  rgba(255, 255, 255, 0) 100%),
  #54a293;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  color: rgb(255, 255, 255);
  border:none;
}
.stdButton {
  position: absolute;
  width: 12.55vw;
  height: 5.54vh;
  left: 2.7vw;
  top: 14.20vh;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
  #e5e5e5;
  text-align: center;
  border:none;
  font-family: SimHei;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 25px;

  /* 深灰 */

  color: #616161;
}

.ManageButton{
  position: absolute;
  width: 12.55vw;
  height: 5.54vh;
  left: 2.7vw;
  top: 27.02vh;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
  #e5e5e5;
  text-align: center;
  border:none;
  font-family: SimHei;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 25px;

  /* 深灰 */

  color: #616161;
}

.stdFont {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(97, 97, 97, 1);
}


#from {
  font-family: SimHei;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 25px;
  color: #616161;
  align-content: center;
  align-items: center;
}

#detail {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #54a293;
}

.StdSecond {
  position: absolute;
  height: 3vh;
  left: 2.7vw;
  top: 53.07vh;
}
.RightBarBottom {
  position: absolute;
  height: 25vh;
  width:16vw;
  left: 2.5vw;
  top: 57.38vh;
  line-height: 26px;
  overflow-y: auto;
}
#line{
  position: absolute;
  width: 12.65vw;
  height: 0;
  left: 2.7vw;
  top:23.67vh;
  border: 0.2px solid #CFCFCF;
}
.dropbtn {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
  #e5e5e5;
  text-align: center;
  width: 12.55vw;
  height: 5.54vh;
  border-radius: 5px;
  font-family: SimHei;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 25px;
  /* 深灰 */
  color: #616161;
  border: 0;
  text-align: center;
  align-content: center;
  align-items: center;
  border:none;
}

/* 容器 <div> - 需要定位下拉内容 */
.dropdown {
  position: absolute;
  width: 12.55vw;
  height: 5.54vh;
  left: 2.7vw;
  top: 34.06vh;
  display: inline-block;
}

/* 下拉内容 (默认隐藏) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 12.55vw;
  height: 3.54vh;
}

/* 下拉菜单的链接 */
.dropdown-content a {
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  /* 深灰 */
  color: #616161;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* 鼠标移上去后修改下拉菜单链接颜色 */
.dropdown-content a:hover {background-color: #f1f1f1}
/* 在鼠标移上去后显示下拉菜单 */
.dropdown:hover .dropdown-content {
  display: block;
}

/* 当下拉内容显示后修改下拉按钮的背景颜色 */
.dropdown:hover .dropbtn {
  background-color: #F2F4F4;
}
.QuitFont{
  text-align: center;
  align-content: center;
  align-items: center;
}

</style>
