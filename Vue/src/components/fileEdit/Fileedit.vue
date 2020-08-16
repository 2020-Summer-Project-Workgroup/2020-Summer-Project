<template>
  <div id="edit">
    <div id="top">
      <input id="inlineEdit" v-model="inlineData" type="text" />
      <div class="blank" ></div>
      <div id="commentBut" class="button" @click="comment">
        <span id="comment">评论</span>
      </div>
      <div class="blank" ></div>
      <div id="saveBut" class="button" @click="save">
        <span id="save">保存</span>
      </div>
    </div>
    <div id="bottom">
      <ckeditor id="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import CKEditor from 'ckeditor4-vue'

Vue.use(CKEditor);

export default {
  name: 'edit',
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component,
    //ckeditorinlineeditor: CEKditor.component
  },
  data() {
    return {
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
        
        height: 600,
      }
    };
  }
}

</script>

<style>
  .blank {
    width: 1.25rem;
    height: 3rem;
  }
  
  .button {
    display: flex;
    width: 4.1875rem;
    height: 3rem;
    box-sizing: border-box;
    border-radius: 5px;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
  }
  
  #edit {
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    align-items: center;
    height: 45.4375rem;
    width: 75rem;
    background-color: #FFFFFF;
    border: 1px solid #f0f0ed;
  }
  
  #top {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 95%;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 6.25rem;
    align-items: center;
  }
  
  #inlineEdit {
    flex-basis: 37.5rem;
    flex-grow: 9;
    flex-shrink: 0;
    height: 3rem;
    border-radius: 5px;
    border: 1px solid #CFCFCF;
  }
  
  #commentBut {
    color: #FFFFFF;
    border: 1px solid #000000;
  }
  
  #comment {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    color: #000000;
  }
  
  #saveBut {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #54A293;
  }
  
  #save {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    color: #FFFFFF;
  }
  
  #bottom {
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95%;
    height: 39.1875rem;
  }
  
  #editor {
    flex-basis: 38.75rem;
    flex-grow: 0;
    flex-shrink: 0;
    
  }
  
  #title {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    color: #686868;
  }
  
  
</style>