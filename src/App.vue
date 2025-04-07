<script scoped setup>
import HeaderBar from "@/components/HeaderBar.vue";

import {onMounted} from 'vue';
import {useUserStore} from "@/stores/user";

const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUser();
});
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

.router-container {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>