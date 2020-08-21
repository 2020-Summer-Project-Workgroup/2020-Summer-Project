<template>
  <div id="file-view-container">
    <div id="edit">
      <div id="edit-top">
        <input type="text" v-model="title" placeholder="标题"/>
        <button id="edit-save" @click="upload">保存</button>
      </div>
      <ckeditor id="ckeditor" v-model="content" :config="editorConfig"></ckeditor>
    </div>
    <div class="message-box">
      <div class="message-item" v-for="comment in comments" :key="comment.id">
        <el-avatar class="message-avatar" icon="el-icon-user-solid" :size="64"></el-avatar>
        <span class="message-title">{{comment.sendName}} 回复了 {{comment.title}}</span>
        <span class="message-time">{{comment.time}}</span>
        <span class="message-content">{{comment.content}}</span>
        <div class="aline"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import CKEditor from 'ckeditor4-vue'

Vue.use(CKEditor);

export default {
  name: "File",
  data() {
    return {
      fileId: '',
      title: '',
      content: '',
      editorConfig: {
        // The configuration of the editor.
        // width: 1282.49,
        height: 600,
        readOnly: false,
        filebrowserImageBrowseUrl: '/temp',
        filebrowserImageUploadUrl: 'localhost:8036/img'
      }
    }
  },
  created() {
    if (this.file === null) {
      this.fileId = ''
      this.title = ''
      this.content = ''
    } else {
      this.fileId = this.file.id
      this.title = this.file.title
      this.content = this.file.content
    }
  },
  methods: {
    upload() {
      if (this.isNew) {
        this.createFile()
      } else {
        this.updateFile()
      }
    },
    createFile() {
      this.$store.dispatch({
        type: 'createFile',
        title: this.title,
        content: this.content
      })
    },
    updateFile() {
      this.$store.dispatch({
        type: 'updateFile',
        title: this.title,
        content: this.content
      })
    }
  },
  computed: {
    file() {
      return this.$store.getters.currentFile
    },
    isNew() {
      return this.$store.getters.currentFile === null
    }
  }
}
</script>

<style scoped>
#file-view-container {
  position: absolute;
  left: 17.6vw;
  bottom: 0;
  width: 62.5vw;
  height: calc(100vh - 68px);
  background-color: rgba(242, 244, 244, 1);
  overflow-y: auto;
}

#edit {
  position: relative;
  top: 0;
  left: 0;
  right: 0;

  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

#edit-top {
  position: absolute;
  left: 3%;
  width: 94%;
  height: 36px;
}
#edit-top input {
  font-size: 20px;
}

#edit-save {
  width: 96px;
  height: 28px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #E5E5E5;
  border: 1px solid #CFCFCF;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 20px;
}

#ckeditor {
  position: absolute;
  top: 36px;
  width: 94%;
  left: 3%;
}
</style>