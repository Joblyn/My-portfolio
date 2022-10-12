<template>
  <div id="home">
    <intro />
    <work />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Intro from "@/components/Intro/Intro.vue";
import Work from "@/components/SelectedWork/Work/Work.vue";

export default defineComponent({
  name: "Home",
  components: {
    Intro,
    Work,
  },
});
</script>
