<template>
  <div id="trash5">
    <div id="head5">
      <tr>
        <th id="MyCollectFont5">
          我丢弃的
          <i class="el-icon-delete"></i>
        </th>
        <th id="CollectTime5">
          修改时间
        </th>
      </tr>
    </div>
    <tr id="line5">
      <td>
        <hr size="1px" color="#CFCFCF" width="100%"/>
      </td>
    </tr>
    <div id="body5" >
      <div id="body-row5" v-for="file in files" :key="file.name">
        <div id="blank9">{{ file.title }}</div>
        <div id="blank10">{{ file.time }}</div>
        <div id="blank11" class="file-name" @click="recovery(file.id)">恢复文档</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"create",
  methods: {
    recovery(fileId) {
      this.$store.commit('recovery', fileId)
    }
  },
  computed: {
    files() {
      return this.$store.getters.trash
    }
  }
}
</script>

<style>
a:hover {color: #54A193}

a:link {color: #FFFFFF}

a {
  color: #616161;
  text-decoration: none;
}

.file-name {
  color: #616161;
  text-decoration: none;
}
.file-name:hover {
  cursor: pointer;
  color: #54A193
}

#trash5 {
  position: absolute;
  left:17.6vw;
  bottom: 0;
  width: 62.5vw;
  height: calc(100vh - 68px);
  background-color: rgba(242, 244, 244, 1);
}
#head5{
  position: absolute;
  bottom: 91%;
  left: 10%;
}
#MyCollectFont5{
  height: 40px;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 37px;
  color: #616161;
}

#CollectTime5{
  position: relative;
  width: 60%;
  height: 60%;
  left: 75%;
  top: 50%;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #CFCFCF;
}

#line5{
  position: absolute;
  width: 80%;
  height: 0;
  left: 10%;
  bottom: 89%;
  border: 0.2px solid #CFCFCF;
}

#body5{
  position: absolute;
  height: 85%;
  width: 80%;
  left: 10%;
  top:13%;
  overflow-y: auto;
  overflow-x: hidden ;
  bottom: 0;
}

#body-row5 {
  position: absolute;
  top:1%;
  height: 8%;
  valign: bottom;
}

#blank9 {
  position: relative;
  top:50%;

  width: 50%;
  height: 100%;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 33px;
  color: #616161;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}

#blank10 {
  position: relative;
  height: 100%;
  left: 64%;
  margin-top: -5%;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #616161;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  float: left;
}

#blank11 {
  position: relative;
  height: 100%;
  left: 85%;
  margin-top: -5%;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #616161;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  float: left;
}
</style>
