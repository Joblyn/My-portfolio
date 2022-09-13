<template>
  <div>
    <fixed-nav />
    <page />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FixedNav from "@/components/FixedNav/FixedNav.vue";
import Page from "@/containers/Page.vue";

export default defineComponent({
  name: "Layout",
  components: {
    FixedNav,
    Page,
  },
});
</script>
