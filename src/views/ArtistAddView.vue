<script setup lang="ts">
import BlueButton from "@/components/BlueButton.vue";
import DropBox from "@/components/DropBox.vue";
import {ref, useTemplateRef} from "vue";
import NotificationBar from "@/components/NotificationBar.vue";
import {addArtist} from "@/api/artistService";


const artistName = ref("");

type notificationBar = InstanceType<typeof Notification>
const notifier = useTemplateRef<notificationBar>("notifier");

const handleArtistAdd = () => {
  addArtist(artistName.value);
  notifier.value?.addNotification("Artist was successfully added!");
}
</script>

<template>
  <div class="form-container">
    <h2 style="font-weight: normal;">Add artist</h2>
    <form @submit.prevent="handleArtistAdd">
      <div class="input-group">
        <label for="username">Artist name:</label>
        <input v-model="artistName" type="text" required placeholder="Artist name..."/>
      </div>
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