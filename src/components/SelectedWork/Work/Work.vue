<template>
  <section id="selected-work" class="work">
    <section-header>Selected Work</section-header>
    <work-items @update-modal="updateModal" />
    <work-modal
      @update-modal="updateModal"
      :is-open="isOpen"
      :work="activeWork"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject, ref } from "vue";

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

    const activeWork = ref(null);
    const isOpen = ref(false);

    const updateModal = (value: boolean, work = null) => {
      isOpen.value = value;
      if (work) {
        activeWork.value = work;
      }
    };

    onMounted(() =>
      updateActiveLinkOnScroll("#selected-work", updateActiveLink)
    );

    return {
      isOpen,
      updateModal,
    };
  },
});
</script>

<style
  scoped
  src="@/components/SelectedWork/Work/style.scss"
  lang="scss"
></style>
