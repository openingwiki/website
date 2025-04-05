<script setup lang="ts">
import {getAnimeByName} from "@/api/animeService";
import {ref, useTemplateRef} from "vue";
import AnimeSelector from "@/components/AnimeSelector.vue";
import ArtistSelector from "@/components/ArtistSelector.vue";
import {AnimePreview} from "@/types/anime";
import NotificationBar from "@/components/NotificationBar.vue";
import DropBox from "@/components/DropBox.vue";
import BlueButton from "@/components/BlueButton.vue";
import {getArtistByName} from "@/api/artistService";
import {ArtistPreview} from "@/types/artist";
import {addOpening} from "@/api/openingService";


/* eslint-disable @typescript-eslint/no-empty-function */
const doNothing = (_arg: any) => {};


// Opening name config.
const openingName = ref("");

// Anime selector config.
type animeSelectorType = InstanceType<typeof AnimeSelector>;
const animeNames = ref<AnimePreview[]>([]);
const animeSelector = useTemplateRef<animeSelectorType>("animeSelector");

const searchAnime = async (inputText: string, loading: (isLoading: boolean) => void) => {
  loading(true);

  const result = await getAnimeByName(inputText);

  animeNames.value = [];
  result.forEach(item => {
    animeNames.value.push(item);
  });

  loading(false);
}
searchAnime("", doNothing);

// Artist selector config.
type artistSelectorType = InstanceType<typeof ArtistSelector>
const artistSelector = useTemplateRef<artistSelectorType>("artistSelector");
const artistNames = ref<ArtistPreview[]>([]);

const searchArtist = async (inputText: string, loading: (isLoading: boolean) => void) => {
  loading(true);

  const result = await getArtistByName(inputText);

  artistNames.value = [];
  result.forEach(item => {
    artistNames.value.push(item);
  });

  loading(false);
}
searchArtist("", doNothing);

// Anime preview config.
type dropBox = InstanceType<typeof DropBox>
const dropboxPreview = useTemplateRef<dropBox>("dropboxPreview");

// Notifier config.
type notificationBar = InstanceType<typeof NotificationBar>
const notifier = useTemplateRef<notificationBar>("notifier");

// Youtube link.
const youtubeLink = ref("");

// Function to add opening.
const handelOpeningAdd = () => {
  if (animeSelector.value?.selectedValue?.id !== undefined && artistSelector.value?.selectedValue?.id !== undefined) {
    addOpening(
        openingName.value,
        animeSelector.value.selectedValue.id,
        [artistSelector.value.selectedValue.id],
        convertToEmbedLink(youtubeLink.value)
    );
    notifier.value?.addNotification("Artist was successfully added!");
  }
}

function convertToEmbedLink(youtubeUrl: string): string {
  const videoId = youtubeUrl.split("v=")[1]?.split("&")[0];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
}

</script>

<template>
  <div class="form-container">
    <h2 style="font-weight: normal;">Add openig</h2>
    <form @submit.prevent="handelOpeningAdd">
      <div class="input-group">
        <label for="opening-name">Opening name:</label>
        <input v-model="openingName" type="text" required placeholder="Opening name..."/>
      </div>
      <div class="input-group">
        <label>Anime name:</label>
        <anime-selector  ref="animeSelector" class="anime-selector" :opts="animeNames" :change-func="searchAnime" :placeholder="'Select anime...'"></anime-selector>
      </div>
      <div class="input-group">
        <label>Artist name:</label>
        <artist-selector  ref="artistSelector" class="anime-selector" :opts="artistNames" :change-func="searchArtist" :placeholder="'Select artist...'"></artist-selector>
      </div>
      <div class="input-group">
        <label>Youtube link:</label>
        <input v-model="youtubeLink" type="text" required placeholder="Youtube link..."/>
      </div>
      <blue-button class="submit-button" type="submit">Add</blue-button>
    </form>
  </div>
  <NotificationBar ref="notifier" />
</template>

<style scoped>
.anime-selector {
  width: 100%;
}

custom-select {
  width: 500px;
}

h2 {
  margin: 0;
}

.form-container {
  background-color: #2F2D46;
  width: 600px;
  color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
}

.input-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}


input {
  width: 100%;
  border-radius: 3px;
  border: 0;
  padding: 0;
  box-sizing: border-box;
  margin: 0;
  height: 30px;
  padding-left: 10px;
}

input:focus {
  outline: none;
  border: 3px solid #ccc;
  border-color: #3914AF;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.submit-button {
  width: 100%;
  height: 30px;
  font-size: 16px;
}
</style>