<script lang="ts" setup>
import OpeningCard from "@/components/OpeningCard.vue";
import {onMounted, Ref, ref} from "vue";
import {searchOpenings} from "@/api/openingService";
import {OpeningPreview} from "@/types/opening";
import SearchBar from "@/components/SearchBar.vue";
import BlueButton from "@/components/BlueButton.vue";

const openings: Ref<OpeningPreview[]> = ref([]);
const lastSearchTerm = ref("");

const handleSearch = async (searchTerm: string) => {
  openings.value.length = 0;

  const newOpenings = await searchOpenings(10, 0, searchTerm);
  newOpenings.forEach(opening => {
    openings.value.push(opening);
  })

  lastSearchTerm.value = searchTerm;
}

onMounted(async () => {
  await handleSearch("");
})
</script>

<template>
  <div class="main">
    <h2 style="color: white; font-weight: normal">Openings collection</h2>
    <search-bar @search="handleSearch"/>
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
    <div class="dividing-line"></div>
    <blue-button class="load-more-btn">Load more</blue-button>
  </div>
</template>

<style scoped>
.dividing-line {
  width: 100%;
  height: 1px;
  background-color: #007BFF;
}

.load-more-btn {
  width: 100%;
  height: 20px;
}

.no-style-link {
  width: 100%;
  text-decoration: none;
}

.main {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>