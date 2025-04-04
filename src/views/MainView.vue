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
    <h2 style="color: white; font-weight: normal">Openings collection</h2>
    <opening-card v-for="opening in openings" :key="opening.id"
                  :thumbnail-link="opening.thumbnailLink"
                  :name="opening.name"
                  :anime-name="opening.animeName"
                  :artist-names="opening.artistNames"
    />
  </div>
</template>

<style scoped>
.main {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>