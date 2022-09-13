<template>
  <main
    id="main"
    class="md:w-[calc(100vw-6rem)] md:h-screen w-full h-[calc(100vh-6rem)] md:ml-24"
  >
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Page",
});
</script>
