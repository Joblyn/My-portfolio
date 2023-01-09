<template>
  <div>
    <!-- desktop navigation -->
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
                @click.prevent="handleInternalNavigation(item.url)"
                >{{ item.name }}</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <!-- mobile navigation -->
    <div class="mobile-nav" v-if="isOpen">
      <div
        class="floating-logo"
        aria-labelledby="Floating logo"
        @click="showMobileNav"
      ></div>
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
              @click.prevent="handleInternalNavigation(item.url)"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

import * as ROUTES from "@/router/constants";
import navItems from "@/fixtures/navItems";
import animateFixedNav, {
  scrollToSection,
} from "@/components/FixedNav/animate";
import { ActiveLinkContext } from "@/interfaces/nav";

export default defineComponent({
  name: "FixedNav",
  setup() {
    const $router = useRouter();
    const $route = useRoute();

    const { activeLink } = inject("active-link") as ActiveLinkContext;
    const isOpen = ref<boolean>(false);

    const handleInternalNavigation = (url: string) => {
      if ($route.path !== "/") {
        $router.push({ path: "/", hash: url });
      } else {
        history.pushState({}, "", $route.path + url);
      }
      scrollToSection(url);
    };

    const showMobileNav = () => {
      isOpen.value = !isOpen.value;
    };

    onMounted(() => animateFixedNav(isOpen.value));

    return {
      active: activeLink,
      ROUTES,
      navItems,
      handleInternalNavigation,
      showMobileNav,
    };
  },
});
</script>

<style scoped src="@/components/FixedNav/style.scss" lang="scss"></style>
