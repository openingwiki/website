<script setup lang="ts">
import OpeningCard from "@/components/OpeningCard.vue";
import {onMounted, Ref, ref} from "vue";
import {searchOpenings} from "@/api/openingService";
import {OpeningPreview} from "@/types/opening";


const openings: Ref<OpeningPreview[]> = ref([]);

onMounted(async () => {
  openings.value.length = 0;

  const newOpenings = await searchOpenings(10, 0, "");
  newOpenings.forEach(opening => {
    openings.value.push(opening);
  })
})
</script>

<template>
  <div class="main">
    <opening-card v-for="opening in openings" :key="opening.id" :thumbnail-link="opening.thumbnailLink"></opening-card>
  </div>
</template>

<style scoped>
</style>