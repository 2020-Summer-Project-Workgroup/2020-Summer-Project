<template>
  <div id="editor">
    <ckeditor type="inline" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
import Vue from 'vue'
import CKEditor from 'ckeditor4-vue'

Vue.use(CKEditor);

export default {
  name: 'editor',
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component
  },
  data() {
    return {
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      }
    };
  }
}
</script>

<style>
</style>
