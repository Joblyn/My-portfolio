<template>
  <section id="selected-work" class="work_section">
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
import type { Ref } from "vue";

import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader.vue";
import WorkItems from "@/components/SelectedWork/WorkItems/WorkItems.vue";
import WorkModal from "@/components/SelectedWork/WorkModal/WorkModal.vue";
import { updateActiveLinkOnScroll } from "@/components/FixedNav/animate";
import { ActiveLinkContext } from "@/interfaces/nav";
import { Work } from "@/interfaces/work";

export default defineComponent({
  name: "Work",
  components: {
    SectionHeader,
    WorkItems,
    WorkModal,
  },
  setup() {
    const { updateActiveLink } = inject("active-link") as ActiveLinkContext;

    const isOpen: Ref<boolean> = ref(false);
    const activeWork: Ref<Work | null> = ref(null);

    const updateModal = (value: boolean, work: Work | null) => {
      console.log("work", work);
      isOpen.value = value;
      activeWork.value = work;
      console.log("isOpen", isOpen);
      console.log("activework", activeWork.value);
    };

    onMounted(() =>
      updateActiveLinkOnScroll("#selected-work", updateActiveLink)
    );

    return {
      isOpen,
      activeWork,
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
