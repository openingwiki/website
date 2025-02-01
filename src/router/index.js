import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue"
import AuthPage from "../views/AuthPage.vue"
import RegistrationPage from "@/views/RegistrationPage.vue";

const routes = [
    { path: "/", component: MainPage },
    { path: "/login", component: AuthPage },
    { path: "/register", component: RegistrationPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
