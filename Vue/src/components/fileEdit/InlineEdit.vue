<template>
    <div id="app">
        <ckeditor type="inline" v-model="editorData" :config="editorConfig" ></ckeditor>
    </div>
</template>

<script src="../node_modules/ckeditor4/ckeditor.js"></script>
<script src="../node_modules/ckeditor4-vue/dist/ckeditor.js"></script>
<script >
		import Vue from 'vue';
		import CKEditor from 'ckeditor4-vue';
		Vue.use( CKEditor );
		
    export default {
        name: 'app',
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
