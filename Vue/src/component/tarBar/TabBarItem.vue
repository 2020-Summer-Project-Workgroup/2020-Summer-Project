<template>
  <div class="tab-bar-item" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: String
  },
  methods: {
    onClick() {
      this.$router.push(this.link)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.tab-bar-item:hover {
  opacity: 50%;
  cursor: pointer;
}
</style>