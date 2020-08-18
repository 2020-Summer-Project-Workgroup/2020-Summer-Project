<template>
  <div id="message-item" @click="watch">
    <el-badge :value="value" class="item" :hidden="isHidden">
      <i class="el-icon-bell"></i>
    </el-badge>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      value: 12
    }
  },
  methods: {
    watch() {
      this.value = 0
    }
  },
  computed: {
    isHidden() {
      return !(this.value > 0)
    }
  }
}
</script>

<style scoped>
#message-item {
  position: absolute;
  top: 20px;
  right: 5.22vw;
}

#message-item i {
  font-size: 30px;
  font-weight: bold;
  color: #54A193;
}

#message-item i:hover{
  cursor: pointer;
  opacity: 50%;
}
</style>