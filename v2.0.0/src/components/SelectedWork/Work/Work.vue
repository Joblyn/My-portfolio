<template>
  <section id="selected-work" class="work section">
    <section-header>Selected Work</section-header>
    <work-items />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";

import "@/components/SelectedWork/Work/style.scss";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader.vue";
import WorkItems from "@/components/SelectedWork/WorkItems/WorkItems.vue";
import { updateActiveLinkOnScroll } from "@/components/FixedNav/animate.ts";

export default defineComponent({
  name: "Work",
  components: {
    SectionHeader,
    WorkItems,
  },
  setup() {
    const { updateActiveLink } = inject("active-link");

    onMounted(() =>
      updateActiveLinkOnScroll("selected-work", updateActiveLink)
    );
  },
});
</script>
