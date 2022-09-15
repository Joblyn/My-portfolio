<template>
  <div id="home">
    <intro />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Intro from "@/components/Intro/Intro.vue";

export default defineComponent({
  name: "Home",
  components: {
    Intro,
  },
});
</script>
