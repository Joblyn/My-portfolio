<template>
  <div>
    <div id="fixed-nav" class="fixed-nav">
      <nav class="w-full">
        <h1>
          <router-link :to="ROUTES.HOME.path" class="logo" data-test="logo">
            Job Oaikhenah: Frontend Engineer
          </router-link>
        </h1>
        <div class="navigation">
          <ul class="navigation__list">
            <li
              v-for="item in navItems"
              :key="item.name"
              data-test="nav-item"
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

    <div class="mobile-nav">
      <div class="floating-logo" aria-labelledby="Floating logo"></div>
      <nav aria-labelledby="mobile navigation" class="navigation">
        <ul class="navigation__list">
          <li
            v-for="item in navItems"
            :key="item.name"
            data-test="nav-item-mobile"
            class="navigation__item"
          >
            <router-link :to="item.url" class="navigation__link">{{
              item.name
            }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import * as ROUTES from "@/router/constants";
import navItems from "@/fixtures/navItems";
import "@/components/FixedNav/style.scss";
import animateFixedNav from "@/components/FixedNav/animate.ts";

export default defineComponent({
  name: "FixedNav",
  setup() {
    onMounted(animateFixedNav);

    return {
      ROUTES,
      navItems,
    };
  },
});
</script>
