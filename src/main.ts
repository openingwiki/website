import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia} from "pinia";
import VueSelect from "vue-select";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.component("v-select", VueSelect);
app.mount("#app");
