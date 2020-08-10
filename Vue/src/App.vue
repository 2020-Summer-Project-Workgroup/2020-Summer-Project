<template>
  <div id="app">
    <TabBar/>
    <router-view/>
  </div>
</template>

<script>
import TabBar from "@/component/tarBar/TabBar";
export default {
  name: 'App',
  components: {
    TabBar
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
