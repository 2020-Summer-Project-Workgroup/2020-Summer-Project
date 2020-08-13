<template>
  <div class="search-bar">
    <input id="search-input" placeholder="搜索文档标题">
    <img id="search-button" src="~assets/search.png" @click="search">
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    search() {

    }
  }
}
</script>

<style scoped>
.search-bar {
  position: absolute;
  right: 12.66vw;
  top: 15px;
}

input {
  background: #FFFFFF;
  font-size: 20px;
  font-family: "Hiragino Sans GB", "Helvetica Neue", Helvetica,
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  border: 1px solid #CFCFCF;
  box-sizing: border-box;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05), inset 0 5px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}

input:hover {
  background: #F2F4F4;
  border: 1px solid #54A193;
}

input:focus {
  outline: none;
  background: #F2F4F4;
  border: 1px solid #54A193;
}

#search-input {
  width: 285px;
  height: 38px;
  padding-left: 54px;
}

#search-input::placeholder {
  position: relative;
  top: calc(50% - 16px);
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 29px;
  color: #CFCFCF;
}

#search-button {
  position: absolute;
  width: 25px;
  height: 25px;
  left: 18px;
  top: 7px;
}
</style>