import { createApp, ref } from "vue";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { ActiveLinkContext } from "@/interfaces/nav";

const activeLink = ref<string>("");
const updateActiveLink = (value: string): void => {
  console.log("value", value);
  activeLink.value = value;
};

const contextValues: ActiveLinkContext = { activeLink, updateActiveLink };

createApp(App)
  .use(store)
  .use(router)
  .provide("active-link", contextValues)
  .mount("#root");
