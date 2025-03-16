<script setup lang="ts">
import BlueButton from "@/components/BlueButton.vue";
import {useUserStore} from "@/stores/user";
import { ref } from "vue";


const userStore = useUserStore();

const username = ref("");
const password = ref("");

function handleLogin() {
  userStore.login(username.value, password.value);
}
</script>

<template>
  <div class="login-container">
    <h2 style="font-weight: normal;">Log in</h2>
    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <label for="username">Username:</label>
        <input id="username" v-model="username" type="text" required />
        <div class="error-message" v-if="userStore.isFailedAttempt">
          Wrong username or password
        </div>
      </div>

      <div class="input-group">
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" required />
        <div class="error-message" v-if="userStore.isFailedAttempt">
          Wrong username or password
        </div>
      </div>

      <blue-button class="submit-button" type="submit">Log in</blue-button>
    </form>
    <div class="useful-links">
      <span>Forgot password? Unluck</span>
      <span>Don't have account? <router-link class="link" to="/register">Register</router-link></span>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  width: 400px;
  background-color: #232241;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 10px;
}

h2 {
  margin-bottom: 0;
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

.error-message {
  color: red;
  font-size: 14px;
}

.useful-links {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: lighter;
  font-size: 14px;
}
</style>
