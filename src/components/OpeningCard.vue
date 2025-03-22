<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  id: number,
  name: string,
  thumbnailLink: string
}>();
</script>

<template>
  <div class="card-container">
    <img :src="thumbnailLink">
  </div>
</template>

<style scoped>
.card-container {
  min-width: 500px;
  min-height: 200px;
  background-color: white;
}
</style>