<template>
  <div id="app">
    <Welcome/>
  </div>
</template>

<script>
import Welcome from "@/views/welcome/Welcome";
export default {
  name: 'App',
  components: {
    Welcome
  }
}
</script>

<style>
body {
  font-size: 15px;
  margin: 0;
  padding: 0;
}
</style>
