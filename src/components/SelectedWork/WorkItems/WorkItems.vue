<template>
  <div class="work__items">
    <work-item
      v-for="work in works"
      :key="work.id"
      :id="work.id"
      :title="work.title"
      :banner="work.banner"
      :width="work.width"
      :height="work.height"
      :tags="work.tags"
      :info="work.info"
      :open-modal="() => openModal(work)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import works from "@/fixtures/works";
import WorkItem from "@/components/SelectedWork/WorkItem/WorkItem.vue";
import { Work } from "@/interfaces/work";

export default defineComponent({
  name: "WorkItems",
  components: {
    WorkItem,
  },
  setup(props, { emit }) {
    const openModal = (work: Work) => {
      emit("updateModal", true, work);
    };

    return {
      works,
      openModal,
    };
  },
});
</script>

<style
  scoped
  src="@/components/SelectedWork/WorkItem/style.scss"
  lang="scss"
></style>
