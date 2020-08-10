<template>
  <div id="app">
    <TabBar/>
    <Welcome/>
  </div>
</template>

<script>
import Welcome from "@/views/welcome/Welcome";
import TabBar from "@/component/tarBar/TabBar";
export default {
  name: 'App',
  components: {
    TabBar,
    Welcome
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
