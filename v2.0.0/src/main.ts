import { createApp, ref } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const activeLink = ref("");
const updateActiveLink = (value: string) => {
  activeLink.value = value;
};

createApp(App)
  .use(store)
  .use(router)
  .provide("active-link", { activeLink, updateActiveLink })
  .mount("#root");
