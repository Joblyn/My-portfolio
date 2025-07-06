<template>
  <header
    id="intro"
    class="header loaded"
    aria-label="intro"
    aria-describedby="Introduction about Job Oaikhenah"
  >
    <div class="header__wrapper wrapper">
      <svg class="header__svg" width="100%" height="100%">
        <rect
          class="shape1"
          width="100%"
          height="100%"
          vector-effect="non-scaling-stroke"
          stroke-width="0.1"
          shape-rendering="crispEdges"
        ></rect>
      </svg>
      <div class="header__content">
        <h2 class="header__title">
          Hi,
          <br />
          I'm Job Oaikhenah, <br />
          a Software Engineer
        </h2>
        <p class="header__subtitle">Welcome to my portfolio</p>
        <p class="header__article" aria-describedby="professional statement">
          I'm a Software Engineer passionate about building user-friendly,
          intuitive, and accessible applications—from powerful interfaces to
          efficient backend systems. I'm a logical, goal-driven, and diligent
          developer, committed to helping businesses grow and improving user
          satisfaction across the web. I solve problems through code and
          scalable software solutions, applying best practices, optimizing
          performance, and delivering clean, maintainable systems that look
          great and work even better.
        </p>
        <action-button
          btnType="button"
          :header="true"
          data-test="header-button"
          :onClick="scrollToWork"
          >View my works</action-button
        >
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ActionButton from "../Shared/ActionButton/ActionButton.vue";

export default defineComponent({
  name: "Intro",
  components: {
    ActionButton,
  },
  setup() {
    const scrollToWork = () => {
      document.getElementById("selected-work")?.scrollIntoView({
        behavior: "smooth",
      });
    };

    return {
      scrollToWork,
    };
  },
});
</script>

<style scoped src="@/components/Intro/style.scss" lang="scss"></style>
