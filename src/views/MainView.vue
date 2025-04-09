<script lang="ts" setup>
import OpeningCard from "@/components/OpeningCard.vue";
import {onMounted, Ref, ref} from "vue";
import {searchOpenings} from "@/api/openingService";
import {OpeningPreview} from "@/types/opening";
import SearchBar from "@/components/SearchBar.vue";
import BlueButton from "@/components/BlueButton.vue";

const openings: Ref<OpeningPreview[]> = ref([]);
const lastSearchTerm = ref("");
const currentPage = ref(1);
const itemsPerPage = ref(20);
const totalItems = ref(3);
const isLoading = ref(false);
const hasMore = ref(true);

const handleSearch = async (searchTerm: string, page = 1) => {
  if (isLoading.value) return;

  isLoading.value = true;
  try {
    const offset = (page - 1) * itemsPerPage.value;
    const result = await searchOpenings(itemsPerPage.value, offset, searchTerm);
    const newOpenings = result.openingPreviews;
    totalItems.value = result.totalNumber;

    // If it's a new search or first page, replace the openings
    if (page === 1 || searchTerm !== lastSearchTerm.value) {
      openings.value = newOpenings;
      hasMore.value = openings.value.length != totalItems.value;
    } else {
      // Otherwise append to existing openings
      openings.value = [...openings.value, ...newOpenings];
      hasMore.value = openings.value.length != totalItems.value;
    }

    currentPage.value = page;
    lastSearchTerm.value = searchTerm;
  } finally {
    isLoading.value = false;
  }
}

const loadMore = () => {
  if (hasMore.value) {
    handleSearch(lastSearchTerm.value, currentPage.value + 1);
  }
}

onMounted(async () => {
  await handleSearch("");
})
</script>

<template>
  <div class="main">
    <h2 style="color: white; font-weight: normal">Openings collection</h2>
    <search-bar class="search" @search="handleSearch"/>
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
    <div v-if="isLoading">Loading...</div>
    <blue-button v-if="hasMore" class="load-more-btn" @click="loadMore">Load more</blue-button>
  </div>
</template>

<style scoped>
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
  min-width: 500px;
}
</style>