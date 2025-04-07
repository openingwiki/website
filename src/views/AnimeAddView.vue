<script lang="ts" setup>
import BlueButton from "@/components/BlueButton.vue";
import DropBox from "@/components/DropBox.vue";
import {ref, useTemplateRef} from "vue";
import {addAnime} from "@/api/animeService";
import NotificationBar from "@/components/NotificationBar.vue";
import InputLine from "@/components/InputLine.vue";


const animeName = ref("");

type dropBox = InstanceType<typeof DropBox>
const dropBoxRef = useTemplateRef<dropBox>("dropbox_anime_preview");
type notificationBar = InstanceType<typeof NotificationBar>
const notifier = useTemplateRef<notificationBar>("notifier");

const handelAnimeAdd = () => {
  console.log(dropBoxRef.value?.image)
  if (dropBoxRef.value?.image.file == null) {
    console.log("error");
  } else {
    addAnime(animeName.value, dropBoxRef.value?.image.file);
    notifier.value?.addNotification("Anime was successfully added!");
  }
}
</script>

<template>
  <div class="form-container">
    <h2 style="font-weight: normal;">Add anime</h2>
    <form @submit.prevent="handelAnimeAdd">
      <input-line v-model="animeName" label="Anime name:" placeholder="Anime name..." required></input-line>
      <drop-box ref="dropbox_anime_preview" :label="'Anime preview:'"></drop-box>
      <blue-button class="submit-button" type="submit">Add</blue-button>
    </form>
  </div>
  <NotificationBar ref="notifier"/>
</template>

<style scoped>
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