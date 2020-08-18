<template>
  <div id="container">
    <div id="edit">
      <div id="top">
         <input id="text" type="text" v-model="tltie" placeholder="标题"/>
         <div id="blank"></div>
         <el-button id="save" :plain="true" @click="save">保存</el-button>
      </div>
      <ckeditor id="middle" v-model="editorData" :config="editorConfig"></ckeditor> 
    </div>
    <!-- <Comment id="comment"></Comment> -->
   </div>
</template>

<script>
import Vue from 'vue'
import CKEditor from 'ckeditor4-vue'
// import Comment from '../Comment/Comment.vue'

Vue.use(CKEditor);

export default {
  name: 'Edit',
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component,
    // Comment,
  },
  data() {
    return {
      title: "默认标题",
      editorData: '',
      editorConfig: {
        // The configuration of the editor.
        // width: 1282.49,
         height: 600,
      }
    };
  },
  methods:{
    save() {
      this.$message({
        message: '保存成功',
        center: true
      });
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
#save {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 8.0625rem;
  height: 2.25rem;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #E5E5E5;
  border: 1px solid #CFCFCF;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 20px;
}

#middle {
  width: 95%;
  flex-grow: 0;
  flex-shrink: 0;
}

#comment {
  background-color: #54A293;
}
</style>
