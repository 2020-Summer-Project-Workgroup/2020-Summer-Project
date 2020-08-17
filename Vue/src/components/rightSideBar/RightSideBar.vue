<template>
  <div id="RBar">
    <div class="button greenButton" id="newFile" @click="cl1" :style="newStyle">
      <span class="text">新建</span>
    </div>
    <br />
    <div class="button stdButton" id="from" @mouseenter="me2" @mouseleave="ml2" @click="cl2" :style="newStyle">
      <span class="text">从模板新建</span>
    </div>
    <br />
    <div id="down" class="StdSecond">
      <span class="stdFont">最近浏览</span>
      <span id="detail">
        <a href /> 详情
      </span>
    </div>
    <div class="ReftBarBottom">
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
  
  methods: {},
};
</script>

<style scoped>
.ReftBarBottom {
  position: absolute;
  height: 26px;
  left: 42px;
  top: 280px;
  line-height: 26px;
}

.StdSecond {
  position: absolute;
  height: 27px;
  left: 57px;
  top: 234px;
}

.button {
  width: 241px;
  height: 48px;
  border-radius: 5px;
}

.stdButton {
  position: absolute;
  width: 241px;
  height: 48px;
  left: 49px;
  top: 123px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    #e5e5e5;
  text-align: center;
}

.greenButton {
  position: absolute;
  width: 241px;
  height: 48px;
  left: 49px;
  top: 62px;
  background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%),
    #54a293;
}

.text {
  margin-top: 62px;
  line-height: 48px;
}

.stdFont {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(97, 97, 97, 1);
}

#newFile {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  color: rgb(255, 255, 255);
}

#RBar {
  display: -webkit-flex;
  display: flex;
  width: 19.7vw;
  height: calc(100vh - 68px);
  right: 0;
  bottom: 0;
  padding-top: 30px;
  background: rgba(255, 255, 255, 0.4);
  top: 68px;
  border-width: 1px;
}

#from {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  color: rgba(97, 97, 97, 1);
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

#setBut {
  align-self: flex-end;
}
</style>
