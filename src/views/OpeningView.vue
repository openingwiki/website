<script lang="ts" setup>
import {useRoute} from 'vue-router'
import {onMounted, ref} from "vue";
import {Opening} from "@/types/opening";
import {getOpening} from "@/api/openingService";
import defaultPfp from "@/assets/GojoSatoro.jpg";

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
  <div v-else class="opening-info-container">
    <div class="video">
      <iframe
          :src="opening?.youtubeEmbedLink"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="youtube-video"
          height="608"
          title="YouTube video player"
          width="1080"
      >
      </iframe>
      <div class="opening-name">"{{ opening?.name }}" opening № from {{ opening?.anime.name }}</div>
    </div>
    <div class="artists">
      <span>Artists:</span>
      <div v-for="artist in opening?.artists" :key="artist.id" class="artist-card">
        <img :src="defaultPfp" class="pfp"/>
        {{ artist.name }}
      </div>
    </div>
    <div class="anime">
      <span>Anime:</span>
      {{ opening.anime.name }}
    </div>
  </div>
</template>

<style scoped>
.video {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
}

.pfp {
  width: 40px;
  height: 40px;
  border-radius: 100px;
}

.artists, .anime {
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}

.artist-card {
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: right;
}

.youtube-video {
  border: none;
}

.opening-info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  gap: 20px;
}

.opening-name {
  font-size: 26px;
  font-weight: bolder;
}
</style>