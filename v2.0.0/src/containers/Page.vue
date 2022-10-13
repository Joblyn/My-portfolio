<template>
  <main id="main" class="md:w-[calc(100vw-6em)] w-full md:ml-[6em]">
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Page",
});
</script>
