import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import MainView from "@/views/MainView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import OpeningAddView from "@/views/OpeningAddView.vue";
import AnimeAddView from "@/views/AnimeAddView.vue";
import ArtistAddView from "@/views/ArtistAddView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        component: MainView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    },
    {
        path: '/add/opening',
        name: "add_opening",
        component: OpeningAddView
    },
    {
        path: '/add/anime',
        name: 'add_anime',
        component: AnimeAddView
    },
    {
        path: '/add/artist',
        name: 'add_artist',
        component: ArtistAddView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
