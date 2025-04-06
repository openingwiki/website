<script lang="ts" setup>
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
    <router-link
        v-for="opening in openings"
        :key="opening.id"
        :to="`/openings/${opening.id}`"
        class="no-style-link"
    >
      <opening-card
          :id="opening.id"
          :anime-name="opening.animeName"
          :artist-names="opening.artistNames"
          :name="opening.name"
          :thumbnail-link="opening.thumbnailLink"
      />
    </router-link>
  </div>
</template>

<style scoped>
.no-style-link {
  width: 100%;
  text-decoration: none;
}

.no-style-link:hover {
  
}

.main {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>