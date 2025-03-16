<script setup lang="ts">
import {defineProps, ref} from 'vue'

const props = defineProps<{
  items: { label: string; action: () => void }[];
}>();
const isMenuVisible = ref(false);

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

// eslint-disable-next-line no-undef
defineExpose({
  isMenuVisible,
  toggleMenu
})
</script>

<template>
  <div class="container">
    <button @click="toggleMenu" class="dropdown-btn plus-button">
      <slot/>
    </button>
    <div v-if="isMenuVisible" class="dropdown-menu">
      <button v-for="(item, index) in items" :key="index" @click="item.action" class="dropdown-item">
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

.dropdown-menu {
  top: 110%;
  right: 0;
  position: absolute;
  background-color: #2F2D46;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 150px;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 10;
  border-radius: 3px;
}

.dropdown-item {
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  color: white;
  padding: 10px;
}

.dropdown-item:hover {
  background-color: #454363;
}

.dropdown-btn {
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
}
</style>