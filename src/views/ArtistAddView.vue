<script lang="ts" setup>
import BlueButton from "@/components/BlueButton.vue";
import {ref, useTemplateRef} from "vue";
import NotificationBar from "@/components/NotificationBar.vue";
import {addArtist} from "@/api/artistService";
import InputLine from "@/components/InputLine.vue";

const artistName = ref("");

type notificationBar = InstanceType<typeof NotificationBar>
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
      <input-line v-model="artistName" label="Artist name:" placeholder="Artist name..." required></input-line>
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