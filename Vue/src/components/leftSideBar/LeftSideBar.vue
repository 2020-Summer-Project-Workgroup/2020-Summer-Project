<template>
  <div class="left-side-bar">
    <el-menu
        default-active="3"
        class="el-menu-vertical"
        text-color="#616161"
        active-text-color="#54A193"
        @open="handleOpen"
        @close="handleClose">
      <el-submenu class="left-side-bar-item" index="1" id="team-space">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>团队空间</span>
        </template>
        <div id="team-space-item">
          <el-menu-item-group>
            <template slot="title"></template>
            <el-menu-item index="1-1">轻松文档团队</el-menu-item>
            <el-menu-item index="1-2">金刚石文档</el-menu-item>
          </el-menu-item-group>
        </div>
      </el-submenu>
      <el-menu-item class="left-side-bar-item" index="2">
        <i class="el-icon-user"></i>
        <span slot="title">我创建的</span>
      </el-menu-item>
      <el-menu-item class="left-side-bar-item" index="3">
        <i class="el-icon-star-off"></i>
        <span slot="title">我收藏的</span>
      </el-menu-item>
      <el-menu-item class="left-side-bar-item" index="4">
        <i class="el-icon-delete"></i>
        <span slot="title">回收站</span>
      </el-menu-item>
    </el-menu>
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
.left-side-bar {
  position: absolute;
  top: 68px;
  left: 0;
  height: calc(100vh - 68px);
  width: 17.6vw;
  background-color: rgba(255, 255, 255, .15);
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
}

.el-menu-vertical {
  background: rgba(255, 255, 255, 0.4);
}

.el-menu-vertical .left-side-bar-item:hover {
  background-color: #FFFFFF;
}

.el-menu-vertical #team-space-item {
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  background-color: rgba(0, 0, 0, 0);
}

.el-menu-vertical #team-space {
  padding-top: 20px;
  padding-bottom: 5px;
}
</style>
