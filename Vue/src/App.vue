<template>
	<div id="app">
    <RightSideBar></RightSideBar>
		<!-- <FileEdit></FileEdit> -->
		<router-view/>
	</div>
</template>

<script>
//import FileEdit from 'components/fileEdit/FileEdit.vue'
import RightSideBar from 'components/rightSideBar/RightSideBar.vue'

export default {
  name: 'App',
  components: {
		//FileEdit,
    RightSideBar
  }
}
</script>

<style>
html body {
  font-size: 12px;
  margin: 0;
  padding: 0;
}
</style>
