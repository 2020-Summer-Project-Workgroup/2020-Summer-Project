<template>
  <div class="left-side-bar">
    <el-menu
        :default-active="path[1]"
        class="el-menu-vertical"
        text-color="#616161"
        active-text-color="#54A193"
        router
        @open="handleOpen"
        @close="handleClose"
        >
      <el-submenu index="1" id="team-space">
        <template slot="title">
          <div class="left-side-bar-item">
            <i class="el-icon-user-solid"></i>
            <span>团队空间</span>
          </div>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item v-for="team in teams" :index="path[0]" :key="team.id" @click="setGroup(team)">
            {{team.name}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item class="left-side-bar-item" :index="path[1]" >
        <div class="left-side-bar-item-hover">
          <i class="el-icon-user"></i>
          <span slot="title">我创建的</span>
        </div>
      </el-menu-item>
      <el-menu-item class="left-side-bar-item" :index="path[2]">
        <div class="left-side-bar-item-hover">
          <i class="el-icon-star-off"></i>
          <span slot="title">我收藏的</span>
        </div>
      </el-menu-item>
      <el-menu-item class="left-side-bar-item" :index="path[3]">
        <div class="left-side-bar-item-hover">
          <i class="el-icon-delete"></i>
          <span slot="title">回收站</span>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'LeftSideBar',
  data() {
    return {
      path: [
          '/desktop/team',
          '/desktop/create',
          '/desktop/collect',
          '/desktop/trash'
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    setGroup(group) {
      this.$store.commit('setCurrentGroup', group)
    }
  },
  computed: {
    teams() {
      return this.$store.getters.groups
    }
  }
}
</script>

<style>
.left-side-bar {
  position: absolute;
  top: 68px;
  left: 0;
  height: calc(100vh - 68px);
  width: 17.6vw;
  background-color: rgba(255, 255, 255, .4);
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 26px;
}

.el-menu-vertical {
  background: rgba(255, 255, 255, .4);
}

.el-menu-vertical .left-side-bar-item:hover {
  color: #54A193;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
}

.left-side-bar-item-hover:hover{
  color: #54A193;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
}

.el-menu-vertical .left-side-bar-item:focus {
  color: #54A193;
  background: rgba(0, 0, 0, 0);
}

.left-side-bar-item-hover:focus{
  color: #54A193;
  background: rgba(0, 0, 0, 0);
}

#team-space /deep/ .el-menu{
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
