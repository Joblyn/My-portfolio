<template>
  <section id="get-in-touch" class="get_in_touch_section">
    <section-header>
      Get In Touch
  </section-header>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";
import { updateActiveLinkOnScroll } from "@/components/FixedNav/animate";
import { ActiveLinkContext } from "@/interfaces/nav";

export default defineComponent({
  name: "GetInTouch",
  setup() {
    const { updateActiveLink } = inject("active-link") as ActiveLinkContext;

    onMounted(() => {
      updateActiveLinkOnScroll("#get-in-touch", updateActiveLink);
    });
  },
});
</script>

<style scoped src="@/components/GetInTouch/style.scss" lang="scss"></style>
