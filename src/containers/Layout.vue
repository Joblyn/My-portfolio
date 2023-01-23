<template>
  <div>
    <cursor />
    <preloader />
    <div class="overflow-hidden">
      <fixed-nav />
      <page />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FixedNav from "@/components/FixedNav/FixedNav.vue";
import Page from "@/containers/Page.vue";
import Preloader from "@/components/Shared/Preloader/Preloader.vue";
import Cursor from "@/components/Shared/Cursor/Cursor.vue";

export default defineComponent({
  name: "Layout",
  components: {
    FixedNav,
    Page,
    Preloader,
    Cursor,
  },
});
</script>
