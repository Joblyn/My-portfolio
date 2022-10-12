<template>
  <header class="section__header">
    <h2 class="section__title">
      <slot></slot>
    </h2>

    <slot name="extra"></slot>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import "@/components/Shared/SectionHeader/style.scss";

export default defineComponent({
  name: "SectionHeader",
});
</script>
