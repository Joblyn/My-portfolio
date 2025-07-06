<template>
  <div>
    <!-- desktop navigation -->
    <div id="fixed-nav" class="fixed-nav">
      <nav class="w-full" role="navigation">
        <h1>
          <router-link :to="ROUTES.HOME.path" class="logo" data-test="logo">
            Job Oaikhenah: Software Engineer
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
                v-if="item.type === 'external'"
                :to="item.url"
                class="navigation__link"
                >{{ item.name }}</router-link
              >
              <a
                v-else
                :href="item.url"
                class="navigation__link"
                @click.prevent="handleNavigation(item)"
                >{{ item.name }}</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <!-- mobile navigation -->
    <div class="mobile-nav">
      <div
        class="floating-logo"
        aria-labelledby="Floating logo"
        @click="toggleMobileNav"
      ></div>
      <nav
        aria-labelledby="mobile navigation"
        :class="{ navigation: true, isOpen }"
        role="navigation"
      >
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
              @click="handleNavigation(item)"
              >{{ item.name }}</router-link
            >
            <a
              :href="item.url"
              class="navigation__link"
              v-else
              @click.prevent="handleNavigation(item)"
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
import { NavItem, ActiveLinkContext } from "@/interfaces/nav";

export default defineComponent({
  name: "FixedNav",
  setup() {
    const $router = useRouter();
    const $route = useRoute();

    const { activeLink } = inject("active-link") as ActiveLinkContext;
    const isOpen = ref(false);

    const handleNavigation = (item: NavItem) => {
      const { url, type } = item;
      isOpen.value &&
        (() => {
          isOpen.value = false;
          document.body.style.overflowY = "auto";
        })();

      if (type === "internal") {
        if ($route.path !== "/") {
          $router.push({ path: "/", hash: url });
        } else {
          history.pushState({}, "", $route.path + url);
        }
        scrollToSection(url);
      }
    };

    const toggleMobileNav = () => {
      isOpen.value = !isOpen.value;
      document.body.style.overflowY = isOpen.value ? "hidden" : "auto";
    };

    onMounted(() => animateFixedNav());

    return {
      active: activeLink,
      isOpen,
      ROUTES,
      navItems,
      handleNavigation,
      toggleMobileNav,
    };
  },
});
</script>

<style scoped src="@/components/FixedNav/style.scss" lang="scss"></style>
