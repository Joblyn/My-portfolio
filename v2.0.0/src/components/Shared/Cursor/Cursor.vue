<template>
  <div>
    <div
      class="h-[30px] w-[30px] border border-[#a2825d] border-solid rounded-full fixed bg-transparent -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-30 transition-opacity ease"
      id="cursor"
    >
      <div
        class="h-[8px] w-[8px] bg-brand-green border-none rounded-full"
      ></div>
    </div>
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
