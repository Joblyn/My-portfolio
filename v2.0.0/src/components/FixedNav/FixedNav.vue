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
              data-test="nav-item-mobile"
              :class="['navigation__item', active === item.url ? 'active' : '']"
            >
              <router-link
                :to="item.url"
                class="navigation__link"
                v-if="item.type === 'external'"
                >{{ item.name }}</router-link
              >
              <a
                :href="item.url"
                class="navigation__link"
                v-else
                @click="handleInternalNavigation(item.url)"
                >{{ item.name }}</a
              >
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
            :class="['navigation__item', active === item.url ? 'active' : '']"
          >
            <router-link
              :to="item.url"
              class="navigation__link"
              v-if="item.type === 'external'"
              >{{ item.name }}</router-link
            >
            <a
              :href="item.url"
              class="navigation__link"
              v-else
              @click="handleInternalNavigation(item.url)"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";

import * as ROUTES from "@/router/constants";
import navItems from "@/fixtures/navItems";
import "@/components/FixedNav/style.scss";
import animateFixedNav, {
  scrollToSection,
} from "@/components/FixedNav/animate.ts";

export default defineComponent({
  name: "FixedNav",
  setup() {
    const { activeLink, updateActiveLink } = inject("active-link");

    const handleInternalNavigation = (url) => {
      scrollToSection(url);
      updateActiveLink(url);
    };

    onMounted(animateFixedNav);

    return {
      active: activeLink,
      ROUTES,
      navItems,
      handleInternalNavigation,
    };
  },
});
</script>
