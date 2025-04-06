<script lang="ts" setup>
import {useRoute} from 'vue-router'
import {onMounted, ref} from "vue";
import {Opening} from "@/types/opening";
import {getOpening} from "@/api/openingService";

const route = useRoute();
const openingId = Number(route.params.id as string);
const isLoading = ref(true);

const opening = ref<Opening | null>();

onMounted(async () => {
  opening.value = await getOpening(openingId);
  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading">
    HI!
  </div>
  <div v-else>
    <iframe
        :src="opening?.youtubeEmbedLink"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        height="608"
        title="YouTube video player"
        width="1080">
    </iframe>
  </div>
</template>

<style scoped>

</style>