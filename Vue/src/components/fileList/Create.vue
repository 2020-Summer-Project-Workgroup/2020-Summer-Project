<template>
  <div id="create">
    <div id="head">
      <tr>
        <th id="MyCollectFont">
          我创建的
          <i class="el-icon-user"></i>
        </th>
        <th id="CollectTime">
          修改时间
        </th>
      </tr>
    </div>
    <tr id="line">
      <td>
        <hr size="1px" color="#CFCFCF" width="100%"/>
      </td>
    </tr>
    <div id="body" >
      <div id="body-row" v-for="file in files" :key="file.id">
        <div id="blank1"><span class="file-name" @click="toFile">{{ file.title }}</span></div>
        <td id="blank3">{{ file.time.split("T")[0] }} {{ file.time.split("T")[1].split(".")[0] }}</td>
        <td id="blank4"><span class="file-name" @click="delFile">删除文档</span></td>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Create",
  methods: {
    toFile(fileId) {

    },
    delFile(fileId) {
      
    }
  },
  computed: {
    files() {
      return this.$store.getters.files
    }
  }
}
</script>

<style>
.file-name {
  color: #616161;
  text-decoration: none;
}
.file-name:hover {
  cursor: pointer;
  color: #54A193
}

#create {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: absolute;
  left:17.6vw;
  bottom: 0;
  width: 62.5vw;
  height: calc(100vh - 68px);
  background-color: rgba(242, 244, 244, 1);
}
#head{
  position: absolute;
  bottom: 82.90vh;
  left: 6.40vw;
}
#MyCollectFont{
  left: 115px;
  width: 300px;
  height: 4.61vh;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 3.23vh;
  line-height: 4.27vh;
  color: #616161;
}
#Creater{
  position: absolute;
  left: 25.31vw;
  top: 1vh;
  width: 4vw;
  height: 3.23vh;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.30vh;
  line-height: 3.02vh;
  color: #CFCFCF;
}
#CollectTime{
  position: absolute;
  width: 6.56vw;
  height: 3.23vh;
  left: 35.66vw;
  top: 1vh;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.30vh;
  line-height: 3.02vh;
  color: #CFCFCF;
}
#line{
  position: absolute;
  width: 49.94vw;
  height: 0;
  left: 5.10vw;
  bottom: 81.29vh;
  border: 0.2px solid #CFCFCF;
}
#body{
  position: absolute;
  height: 78vh;
  width: 56vw;
  left: 6.40vw;
  top: 11.66vh;
  overflow-y: auto;
  overflow-x: hidden ;
  bottom: 0;
}
#body-row {
  top:0.5vh;
  height: 3rem;
  valign: bottom;
}

#blank1 {
  width: 25vw;
  height: 4.15vh;
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

#blank2 {
  position: absolute;
  left: 25.31vw;
  margin-top: -3.7vh;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #616161;
}

#blank3 {
  position: absolute;
  left: 35.66vw;
  margin-top: -3.7vh;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #616161;
}

#blank4 {
  position: absolute;
  left: 44.66vw;
  margin-top: -3.7vh;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;

  /* 深灰 */

  color: #616161;
}
</style>
