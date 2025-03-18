<script setup lang="ts">
import {getAnimeByName} from "@/api/animeService";
import {ref} from "vue";
import CustomSelect from "@/components/CustomSelect.vue";
import {AnimePreview} from "@/types/anime";

const animeNames = ref<AnimePreview[]>([]);

const searchAnime = async (inputText: string) => {
  const result = await getAnimeByName(inputText);

  animeNames.value = [];
  result.forEach(item => {
    animeNames.value.push(item);
  });
}
</script>

<template>
  <custom-select :opts="animeNames" :change-func="searchAnime" placeholder="Select anime"></custom-select>
</template>

<style scoped>
</style>