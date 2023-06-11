<template>
  <div>
    <cursor />
    <preloader />
    <div class="overflow-hidden">
      <fixed-nav />
      <page />
      <p-w-a-prompt />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FixedNav from "@/components/FixedNav/FixedNav.vue";
import Page from "@/containers/Page.vue";
import Preloader from "@/components/Shared/Preloader/Preloader.vue";
import Cursor from "@/components/Shared/Cursor/Cursor.vue";
import PWAPrompt from "@/components/PWAPrompt/PWAPrompt.vue";

export default defineComponent({
  name: "Layout",
  components: {
    FixedNav,
    Page,
    Preloader,
    Cursor,
    PWAPrompt,
  },
});
</script>
