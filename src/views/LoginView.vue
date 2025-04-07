<script lang="ts" setup>
import BlueButton from "@/components/BlueButton.vue";
import {useUserStore} from "@/stores/user";
import {ref} from "vue";
import InputLine from "@/components/InputLine.vue";


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
      <input-line v-model="username" :has-error="userStore.isFailedAttempt" class="input-group"
                  error-message="Wrong username or password"
                  label="Username:" required type="text"/>
      <input-line v-model="password" :has-error="userStore.isFailedAttempt" class="input-group"
                  error-message="Wrong username or password"
                  label="Password:" required type="password"/>
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
