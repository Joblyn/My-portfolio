<template>
  <div id="home">
    <intro />
    <work />
    <!-- <about-me /> -->
    <!-- <get-in-touch /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from "vue";
import Intro from "@/components/Intro/Intro.vue";
import Work from "@/components/SelectedWork/Work/Work.vue";

export default defineComponent({
  name: "Home",
  components: {
    Intro,
    Work,
  },
  setup() {
    const { activeLink, updateActiveLink } = inject("active-link");

    return {
      activeLink,
      updateActiveLink,
    };
  },
});
</script>
