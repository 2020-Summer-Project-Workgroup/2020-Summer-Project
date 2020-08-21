<template>
  <div id="container">
    <div id="edit">
      <div id="top">
         <input id="text" type="text" v-model="title" placeholder="标题"/>
         <div id="blank"></div>
         <el-button id="save" :plain="true" @click="upload">保存</el-button>
      </div>
      <ckeditor id="middle" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import CKEditor from 'ckeditor4-vue'
import { newFile } from '@/network/edit.js'

Vue.use(CKEditor);

export default {
  name: 'Edit',
  components: {
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      isNew: false,
      title: '',
      content: '',
      editorConfig: {
        // The configuration of the editor.
        // width: 1282.49,
        height: '600px',
        readOnly: false,
        filebrowserImageBrowseUrl: '/temp',
        filebrowserImageUploadUrl: 'localhost:8036/img'
      }
    }
  },
  methods:{
    upload: function() {
      this.$message({
        message: '保存成功',
        center: true
      });
      console.log("Save");
      
      // newFile(this.$store.getters.userId, this.title, this.editorData);
      newFile(this.$store.getters.userId, this.title, this.editorData).then(res => {
        console.log(res);
      }).catch(err => {
         console.log(err);
      });
      console.log("Save");
    }
  },
  created() {
    if (this.file === null) {
      this.isNew = true
      this.title = ''
      this.editorData = ''
    } else {
      this.isNew = false
      this.title = this.file.title
      this.editorData = this.file.content
    }
  },
  computed: {
    file() {
      return this.$store.getters.currentFile
    }
  }
}
</script>

<style>
  a:hover {color: #54A193}
  
  a:link {color: #FFFFFF}
  
  a {
    color: #616161;
    text-decoration: none;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 20px;
  }
  
  input {
    font-size: 20px;
  }
 
#container {
  height: 84%;
  width: 62.5%;
}
#edit {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  flex-shrink: 1;
  top: 2rem;
  left: 0rem;
  width: 100%;
  height: 45.4375rem;
  /* background-color: #FFFFFF; */
}

#top {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  height: 3rem;
}

#title {
  font-size: 20px;
}
#text {
  height: 2.25rem;
  flex-basis: 85%;
  border: 2px solid #CFCFCF;
  box-sizing: border-box;
  border-radius: 5px;
}

#blank {
  flex-basis: 2rem;
}




#comment {
  background-color: #54A293;
}
</style>
