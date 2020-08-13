<template>
  <div class="LeftSideBar">
    <el-col :span="12">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>团队空间</span>
          </template>
          <el-menu-item-group>
            <template slot="title"></template>
            <el-menu-item index="1-1">轻松文档团队</el-menu-item>
            <el-menu-item index="1-2">金刚石文档</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-user"></i>
          <span slot="title">我创建的</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-star-off"></i>
          <span slot="title">我收藏的</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-delete"></i>
          <span slot="title">回收站</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-divider direction="vertical"></el-divider>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.LeftSideBar{
  position: absolute;
  top: 68px;
  bottom: 0;
  left: 0;
  height: calc(100vh - 68px);
  background-color: #E5E5E5;
  z-index: 20;
}

.el-menu {
  border: none;
}
.fa-margin {
  margin-right: 5px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 338px;
  min-height: 240px;
}

.el-menu-vertical-demo {
  width: 35px;
}
.el-submenu .el-menu-item {
  min-width: 180px;
}
.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
}
</style>
