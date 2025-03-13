<script scoped>
import HeaderBar from "@/components/HeaderBar.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {HeaderBar}
})

</script>

<template>
  <HeaderBar></HeaderBar>
  <div class="router-container">
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #1E1E2E;
}

#app {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>