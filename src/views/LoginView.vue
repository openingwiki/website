<script setup lang="ts">
import BlueButton from "@/components/BlueButton.vue";

const username = '';
const password = '';

function handleLogin() {
  console.log("Logging in with:", username, password);
}
</script>

<template>
  <div class="login-container">
    <h2 style="font-weight: normal;">Log in</h2>
    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <label for="username">Username</label>
        <input id="username" v-model="username" type="text" required />
      </div>

      <div class="input-group">
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" required />
      </div>

      <blue-button class="submit-button" type="submit">Log in</blue-button>
    </form>
    <div class="useful-links">
      <span>Forgot password? Unluck</span>
      <span>Don't have account? <router-link class="link" to="/auth/register">Register</router-link></span>
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

.useful-links {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: lighter;
  font-size: 14px;
}
</style>
