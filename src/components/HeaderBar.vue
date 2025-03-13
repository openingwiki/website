<script setup lang="ts">
import {useUserStore} from "@/stores/user";
import BlueButton from "@/components/BlueButton.vue";

const userStore = useUserStore();
</script>

<template>
  <header>
    <div class="logo">
      <span class="site-name">Opening.wiki</span>
    </div>
    <nav>
      <ul>
        <li><router-link to="/" class="link">Main</router-link></li>
      </ul>
    </nav>
    <div v-if="userStore.isLoggedIn" class="profile">
      ID: FAILED
    </div>
    <div v-else class="auth-buttons">
      <blue-button class="auth-button">Log in</blue-button>
      <blue-button class="auth-button">Sign in</blue-button>
    </div>
  </header>
</template>

<style scoped>
header {
  font-size: 16px;
  color: white;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 10px;
  width: 300px;
}

.profile {
  width: 300px;
  display: flex;
  justify-content: right;
}

.auth-button {
  width: 100px;
  font-size: 16px;
  height: 30px;
}

.auth-buttons {
  width: 300px;
  display: flex;
  justify-content: right;
  gap: 10px;
}

nav {
  height: 100%;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100%;
}

nav ul li {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
}

.site-name {
  font-size: 24px;
  color: white;
  font-weight: bold;
}

.link {
  text-decoration: none;
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link:hover {
  background-color: #1E1E2E;
}

header {
  height: 65px;
  background-color: #232241;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
}
</style>