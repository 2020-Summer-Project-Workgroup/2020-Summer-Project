<template>
  <div id="RBar">
    <div class="button greenButton" id="newFile" @mouseenter="me1" @mouseleave="ml1" @click="cl1" :style="newStyle">
      <!--待加入跳转链接-->
      <span class="text">
        新建
      </span>
    </div>
    <br />
    <div class="button stdButton" id="From" @mouseenter="me2" @mouseleave="ml2" @click="cl2" :style="newStyle">
      <span class="text">
        从模板新建
      </span>
    </div>
    <br />
    <div id="down" class="StdSecond">
      <span class="stdFont">
        最近浏览
      </span>
      <span id="detail">
        <a href="" /> 详情
      </span>

      <!--
      <br />
      <hr id="line" color="#cfcfcf" size="1px" width="95%" />
      <br />
      -->
    </div>
    <div class="ReftBarBottom">
      <table>
        <tbody>
          <tr v-for="file in files" :key="file.name" class="stdFont">
            <img :src="'../../assets/' + file.type + '.png'" /> {{ file.name }} <i class="el-icon-s-tools"></i>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
export default {
  data: function() {
    return {
      files: [{
          type: "个人",
          name: "示例文档"
        },
        {
          type: "团队",
          name: "LSS"
        },
        {
          type: "收藏",
          name: "qwertyuiasdfghjkzxvcbnm"
        },
      ],
    }
  },
  methods: {
  }
}
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
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #E5E5E5;
  text-align: center;
}

.greenButton {
  position: absolute;
  width: 241px;
  height: 48px;
  left: 49px;
  top: 62px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #54A293;
}

.text {
  margin-top: 62px;
  line-height: 48px;
}

.stdFont {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(97, 97, 97, 1);

}

#newFile {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  color: rgb(255, 255, 255);
}

#RBar {
  position: absolute;
  width: 19.7vw;
  height: calc(100vh - 68px);
  right: 0;
  bottom: 0;
  padding-top: 30px;
  background: rgba(255, 255, 255, 0.4);
  top: 68px;
  border-width: 1px;
}

#From {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  color: rgba(97, 97, 97, 1);
  align-content: center;
  align-items: center;
}

#detail {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #54A293;
}

#setBut {
  align-self: flex-end;
}
</style>
