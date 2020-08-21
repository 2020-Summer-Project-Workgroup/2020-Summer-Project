<template>
  <div id="file-view-container">
    <div id="edit">
      <div id="edit-top">
        <input type="text" v-model="title" placeholder="标题"/>
        <button id="edit-save" @click="upload">保存</button>
      </div>
      <ckeditor id="ckeditor" v-model="content" :config="editorConfig"></ckeditor>
    </div>
    <div id="comment-commit">
      <span id="comment-title">评论</span>
      <div id="comment-edit-page">
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入评论"
            v-model="comment">
        </el-input>
      </div>
      <button id="send-comment" @click="sendComment">发送</button>
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
      comment: '',
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
    },
    sendComment() {
      this.$store.dispatch({
        type: 'addComment',
        comment: this.comment
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

#edit-top input {
  position: absolute;
  top: 19px;
  right: 6%;
  width: 20%;
  font-size: 20px;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.05);
  z-index: 10;
}
#edit-top input:hover {
  border: 1px solid #54A293;
  background-color: #F2F4F4;
}
#edit-top input:focus {
  outline: none;
  border: 1px solid #54A293;
  background-color: #F2F4F4;
}

#edit-save {
  position: absolute;
  top: 57px;
  right: 6%;
  width: 96px;
  height: 28px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%,
  rgba(255, 255, 255, 0) 100%), #54A293;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #FFFFFF;
  z-index: 10;
}
#edit-save:hover {
  background-color: #368375;
  cursor: pointer;
}
#edit-save:active {
  outline: none;
  background-color: #368375;
}

#ckeditor {
  position: absolute;
  top: 15px;
  width: 94%;
  height: 700px;
  left: 3%;
}

#comment-commit {
  position: relative;
  top: 732px;
  width: 94%;
  left: 3%;
  height: 300px;
}

#comment-title {
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
  "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 43px;
  color: #616161;
}

#comment-edit-page {

}
</style>