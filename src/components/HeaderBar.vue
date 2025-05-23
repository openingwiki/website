<script lang="ts" setup>
import {useUserStore} from "@/stores/user";

import {useTemplateRef} from "vue";
import router from "@/router";
import {useCookies} from "vue3-cookies";

import ArrowDownSvg from "@/components/ArrowDownSvg.vue";
import BlueButton from "@/components/BlueButton.vue";
import DropDownMenu from "@/components/DropDownMenu.vue";
import PlusSvg from "@/components/PlusSvg.vue";
import defaultPfp from "@/assets/GojoSatoro.jpg";

const {cookies} = useCookies();
const userStore = useUserStore();

type dropDownMenu = InstanceType<typeof DropDownMenu>
const profileMenuComponent = useTemplateRef<dropDownMenu>("profileMenu");
const openingAddMenuComponent = useTemplateRef<dropDownMenu>("openingAddMenu");

const redirectToAuth = (mode: 'login' | 'register') => {
  router.push({path: `/${mode}`});
};

// Profile dropdown configuration.
const logout = () => {
  cookies.remove("access_token");
  userStore.logout();
  profileMenuComponent.value?.toggleMenu();
};

const profileMenuItems = [
  {label: "Logout", action: logout}
]

// Opening add dropdown configuration.
const goToOpeningAddPage = () => {
  router.push("/add/opening");
  openingAddMenuComponent.value?.toggleMenu();
}

const goToAnimeAddPage = () => {
  router.push("/add/anime");
  openingAddMenuComponent.value?.toggleMenu();
}

const goToArtistAddPage = () => {
  router.push("/add/artist");
  openingAddMenuComponent.value?.toggleMenu();
}

const openingAddMenuItems = [
  {label: "Add opening", action: goToOpeningAddPage},
  {label: "Add anime", action: goToAnimeAddPage},
  {label: "Add artist", action: goToArtistAddPage}
];

const appVersion = process.env.VUE_APP_VERSION;
</script>


<template>
  <header>
    <div class="logo">
      <router-link class="site-name-link" to="/">
        <span class="site-name">Opening.wiki <span style="font-size: 12px">{{ appVersion }}</span></span>
      </router-link>
    </div>

    <nav>
      <ul>
        <li>
          <router-link class="link" to="/">Main</router-link>
        </li>
      </ul>
    </nav>

    <div v-if="userStore.isLoggedIn" class="right-menu">

      <drop-down-menu ref="openingAddMenu" :items="openingAddMenuItems" class="opening-add-menu">
        <plus-svg/>
      </drop-down-menu>

      <div class="profile">
        <img :src="defaultPfp" class="pfp"/>
        <span>{{ userStore.username }}</span>

        <drop-down-menu ref="profileMenu" :items="profileMenuItems" class="profile-menu">
          <arrow-down-svg/>
        </drop-down-menu>
      </div>

    </div>

    <div v-else class="auth-buttons">
      <blue-button class="auth-button" @click="redirectToAuth('login')">Log in</blue-button>
      <blue-button class="auth-button" @click="redirectToAuth('register')">Sign in</blue-button>
    </div>
  </header>
</template>

<style scoped>
.right-menu {
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: 20px;
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

.site-name-link {
  text-decoration: none;
}

.site-name {
  font-size: 24px;
  color: white;
  font-weight: bold;
  text-decoration: none;
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