<script setup scoped>
import HeaderBar from "@/components/HeaderBar.vue";

import { onMounted, onUnmounted } from 'vue';

function handleEscape(event) {
  if (event.key === 'Escape') {
    document.activeElement?.blur();
  }
}

function handleClickOutside(event) {
  const active = document.activeElement;
  if (
      active &&
      (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.contentEditable === 'true')
  ) {
    if (!active.contains(event.target)) {
      active.blur();
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
  window.addEventListener('click', handleClickOutside, true);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape);
  window.removeEventListener('click', handleClickOutside, true);
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