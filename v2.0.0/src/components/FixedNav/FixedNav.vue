<template>
  <div id="fixed-nav" class="fixed-nav">
    <nav class="flex items-center justify-evenly w-full md:block">
      <h1>
        <router-link :to="ROUTES.HOME.path" class="logo">
          Job Oaikhenah: Frontend Engineer
        </router-link>
      </h1>
      <div class="navigation">
        <ul class="navigation__list">
          <li
            v-for="item in navItems"
            :key="item.name"
            class="navigation__item"
          >
            <router-link :to="item.url" class="navigation__link">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as ROUTES from "@/router/constants";
import navItems from "@/fixtures/navItems.js";
import "@/components/FixedNav/style.scss";

export default defineComponent({
  name: "FixedNav",
  setup() {
    return {
      ROUTES,
      navItems,
    };
  },
});
</script>
