<template>
  <div id="my-create">
    <div id="head1">
      <div id="MyCollectFont1">
        我创建的
        <i class="el-icon-user"></i>
      </div>
      <span class="file-time-title">修改时间</span>
    </div>
    <tr id="line1">
      <td>
        <hr size="1px" color="#CFCFCF" width="100%"/>
      </td>
    </tr>
    <div class="file-list">
      <div class="file-item" v-for="(file, index) in files" :key="file.id">
        <div class="file-name" @click="toFile(file)">{{ file.title }}</div>
        <i class="el-icon-s-tools file-setting"></i>
        <div class="file-time">{{ file.time.split("T")[0] }} {{ file.time.split("T")[1].split(".")[0] }}</div>
        <span class="file-delete" @click="delFile(index)">删除文档</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Create",
  methods: {
    toFile(file) {
      this.$store.commit('setCurrentFile', file)
      this.$router.push('/desktop/edit')
    },
    delFile(index) {
      this.$store.dispatch('moveToTrash', index)
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
#my-create {
  position: absolute;
  left: 17.6vw;
  bottom: 0;
  width: 62.5vw;
  height: calc(100vh - 68px);
  background-color: rgba(242, 244, 244, 1);
}
#head1{
  position: absolute;
  top: 0;
  bottom: 91%;
  left: 10%;
  right: 10%;
}
#MyCollectFont1{
  position: absolute;
  top: 35px;
  left: 0;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 37px;
  color: #616161;
}

.file-time-title {
  position: absolute;
  left: 48%;
  top: 41px;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #CFCFCF;
}

#line1{
  position: absolute;
  width: 80%;
  height: 0;
  left: 10%;
  bottom: 89%;
  border: 1px solid #CFCFCF;
}

.file-list {
  position: absolute;
  top: 10.94%;
  left: 10%;
  right: 10%;
  bottom: 0;
  overflow-y: auto;
}

.file-item {
  position: relative;
  left: 0;
  width: 100%;
  padding-top: 20px;
  min-height: 40px;
}

.file-name {
  width: 40%;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #616161;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 33px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
.file-name:hover {
  cursor: pointer;
  color: #54A193
}

.file-setting {
  position: absolute;
  left: 42%;
  top: 27px;
  font-size: 20px;
}

.file-time {
  position: absolute;
  top: 23px;
  left: 48%;
  width: 37%;
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
}

.file-delete {
  position: absolute;
  top: 23px;
  left: 85%;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #616161;
}
.file-delete:hover {
  cursor: pointer;
  color: #54A193
}
</style>
