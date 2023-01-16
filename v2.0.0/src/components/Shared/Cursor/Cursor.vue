<template>
  <div>
    <div class="cursor"></div>
    <div class="cursorDot"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import animateCursor from "@/components/Shared/Cursor/animate";

export default defineComponent({
  name: "Cursor",

  setup() {
    onMounted(animateCursor);
  },
});
</script>

<style scoped src="@/components/Shared/Cursor/style.scss" lang="scss"></style>
