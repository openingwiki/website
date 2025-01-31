<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'

export default {
  components: {
    HeaderBar
  },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
  padding: 0;
  background-color: #1E1E2E;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  color: white;
}
</style>
