<script setup lang="ts">
import {ref} from "vue";
import {useUserStore} from "@/stores/user";
import router from "@/router";
import BlueButton from "@/components/BlueButton.vue";
import defaultPfp from "@/assets/GojoSatoro.jpg";
import arrowDown from "@/assets/DownArrow.svg";
import {useCookies} from "vue3-cookies";

const {cookies} = useCookies();
const userStore = useUserStore();

const redirectToAuth = (mode: 'login' | 'register') => {
  router.push({ path: `/${mode}` });
};

const isDropdownVisible = ref(false);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const logout = () => {
  cookies.remove("access_token");
  userStore.logout();

  toggleDropdown();
};
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
      <img :src="defaultPfp" class="pfp"/>
      {{ userStore.username }}

      <button @click="toggleDropdown" class="dropdown-btn">
        <svg fill="#ffffff" height="18px" width="18px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 330 330" xml:space="preserve">
        <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
          c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
          s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
        </svg>
      </button>

      <div v-if="isDropdownVisible" class="dropdown-menu">
        <button @click="logout" class="dropdown-item">Logout</button>
      </div>
    </div>
    <div v-else class="auth-buttons">
      <blue-button class="auth-button" @click="redirectToAuth('login')">Log in</blue-button>
      <blue-button class="auth-button" @click="redirectToAuth('register')">Sign in</blue-button>
    </div>
  </header>
</template>

<style scoped>
svg {
  transition: fill 0.3s ease;
}

svg:hover {
  fill: #7F91A4;
}

.pfp {
  width: 50px;
  height: 50px;
  border-radius: 100px;
}

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
  align-items: center;
  gap: 5px;
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


.dropdown-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.dropdown-menu {
  position: absolute;
  top: 65px;
  right: 0;
  background-color: #2F2D46;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 150px;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 10;
  border-radius: 3px;
}

.dropdown-item {
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  color: white;
  padding: 10px;
}

.dropdown-item:hover {
  background-color: #454363;
}
</style>