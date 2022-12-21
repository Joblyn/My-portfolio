<template>
  <section id="selected-work" class="work section">
    <section-header>Selected Work</section-header>
    <work-items />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import "@/components/SelectedWork/Work/style.scss";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader.vue";
import WorkItems from "@/components/SelectedWork/WorkItems/WorkItems.vue";

export default defineComponent({
  name: "Work",
  components: {
    SectionHeader,
    WorkItems,
  },
});
</script>
