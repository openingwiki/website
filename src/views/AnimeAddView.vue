<script setup lang="ts">
import BlueButton from "@/components/BlueButton.vue";
import DropBox from "@/components/DropBox.vue";
import {ref, useTemplateRef} from "vue";
import {addAnime} from "@/api/animeService";
import DropDownMenu from "@/components/DropDownMenu.vue";
import NotificationBar from "@/components/NotificationBar.vue";


const animeName = ref("");

type dropBox = InstanceType<typeof DropBox>
const dropBoxRef = useTemplateRef<dropBox>("dropbox_anime_preview");
type notificationBar = InstanceType<typeof Notification>
const notifier = useTemplateRef<notificationBar>("notifier");

const handelAnimeAdd = () => {
  console.log(dropBoxRef.value?.image)
  if (dropBoxRef.value.image.file == null) {
    console.log("error");
  } else {
    addAnime(animeName.value, dropBoxRef.value?.image.file);
    notifier.value.addNotification("Anime was successfully added!");
  }
}
</script>

<template>
  <div class="form-container">
    <h2 style="font-weight: normal;">Add anime</h2>
    <form @submit.prevent="handelAnimeAdd">
      <div class="input-group">
        <label for="username">Anime name:</label>
        <input v-model="animeName" type="text" required placeholder="Anime name..."/>
      </div>
      <drop-box :label="'Anime preview:'" ref="dropbox_anime_preview"></drop-box>
      <blue-button class="submit-button" type="submit">Add</blue-button>
    </form>
  </div>
  <NotificationBar ref="notifier" />
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

.input-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}


input {
  width: 100%;
  border: 0;
  padding: 0;
  box-sizing: border-box;
  margin: 0;
  height: 30px;
  padding-left: 5px;
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