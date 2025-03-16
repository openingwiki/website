<script setup lang="ts">
import BlueButton from "@/components/BlueButton.vue";
import { ref } from "vue";


const animeName = ref("");

const handelAnimeAdd = () => {
  console.log("");
}
</script>

<template>
  <div class="container">
    <h2 style="font-weight: normal;">Add anime</h2>
    <form @submit.prevent="handelAnimeAdd">
      <div class="input-group">
        <label for="username">Anime name:</label>
        <input id="username" v-model="animeName" type="text" required />
      </div>
      <blue-button class="submit-button" type="submit">Add</blue-button>
    </form>
  </div>
</template>

<style scoped>
.container {
  background-color: #2F2D46;
  width: 600px;
  color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  width: 90%;
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
  width: 90%;
  height: 30px;
  font-size: 16px;
}
</style>