<template>
  <div id="app">
    <TabBar/>
    <Login/>
  </div>
</template>

<script>
// import Welcome from "@/views/welcome/Welcome";
import TabBar from "@/component/tarBar/TabBar";
import Login from "@/views/login/Login";
export default {
  name: 'App',
  components: {
    Login,
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
