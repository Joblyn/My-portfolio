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
      :information="work.information"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import works from "@/fixtures/works";
import WorkItem from "@/components/SelectedWork/WorkItem/WorkItem.vue";

export default defineComponent({
  name: "WorkItems",
  components: {
    WorkItem,
  },
  setup() {
    return {
      works,
    };
  },
});
</script>
