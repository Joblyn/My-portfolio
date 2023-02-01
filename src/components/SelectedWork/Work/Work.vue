<template>
  <section id="selected-work" class="work">
    <section-header>Selected Work</section-header>
    <work-items />
    <work-modal />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";

import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader.vue";
import WorkItems from "@/components/SelectedWork/WorkItems/WorkItems.vue";
import WorkModal from "@/components/SelectedWork/WorkModal/WorkModal.vue";
import { updateActiveLinkOnScroll } from "@/components/FixedNav/animate";
import { ActiveLinkContext } from "@/interfaces/nav";

export default defineComponent({
  name: "Work",
  components: {
    SectionHeader,
    WorkItems,
    WorkModal,
  },
  setup() {
    const { updateActiveLink } = inject("active-link") as ActiveLinkContext;

    onMounted(() =>
      updateActiveLinkOnScroll("#selected-work", updateActiveLink)
    );
  },
});
</script>

<style
  scoped
  src="@/components/SelectedWork/Work/style.scss"
  lang="scss"
></style>
