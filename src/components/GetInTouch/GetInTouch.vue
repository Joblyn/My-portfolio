<template>
  <section id="get-in-touch" class="get-in-touch"></section>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";
import { updateActiveLinkOnScroll } from "@/components/FixedNav/animate";
import { ActiveLinkContext } from "@/interfaces/nav";

export default defineComponent({
  name: "GetInTouch",
  setup() {
    const { updateActiveLink } = inject("active-link") as ActiveLinkContext;

    onMounted(() => {
      updateActiveLinkOnScroll("#get-in-touch", updateActiveLink);
    });
  },
});
</script>

<style scoped src="@/components/GetInTouch/style.scss" lang="scss"></style>
