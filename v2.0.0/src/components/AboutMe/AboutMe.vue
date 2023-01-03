<template>
  <section id="about-me" class="about-me"></section>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";

import { updateActiveLinkOnScroll } from "@/components/FixedNav/animate";
import { ActiveLinkContext } from "@/interfaces/nav";

export default defineComponent({
  name: "AboutMe",
  setup() {
    const { updateActiveLink } = inject("active-link") as ActiveLinkContext;

    onMounted(() => {
      updateActiveLinkOnScroll("#about-me", updateActiveLink);
    });
  },
});
</script>

<style scoped src="@/components/AboutMe/style.scss" lang="scss"></style>
