<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  id: number,
  name: string,
  thumbnailLink: string,
  animeName: string,
  artistNames: string[]
}>();

const formattedArtistNames = props.artistNames.map(name => `"${name}"`).join(", ");
</script>

<template>
  <div class="card-container">
    <img class="preview" :src="thumbnailLink">
    <div class="info">
      <span class="name">{{name}}</span>
      <span class="artist-names">by {{formattedArtistNames}}</span>
      <span class="anime-name">in {{animeName}} № opening</span>
    </div>
  </div>
</template>

<style scoped>
.preview {
  padding: 10px;
  border-radius: 3px;
  width: 40%;
}

.card-container {
  width: 100%;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  min-width: 500px;
  min-height: 200px;
  background-color: #232241;
  color: white;
}

.info {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: flex-start;
  gap: 10px;
}

.name {
  font-size: 18px;
  font-weight: bolder;
}
</style>