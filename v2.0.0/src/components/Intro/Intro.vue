<template>
  <header id="intro" class="header loaded" aria-label="intro">
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
          a Frontend Engineer
        </h2>
        <p class="header__subtitle">Welcome to my portfolio</p>
        <p class="header__article">
          I'm a Frontend Software Engineer. I build user-friendly, intuitive and
          accessible web applications. I'm a logical, goal driven and diligent
          young champ, committed to growing businesses and improving users'
          satisfaction accross web. I solve problems with the use code and
          technologies, applying best practices within the contexts of
          well-suited use cases, optimising performance and aesthetics.
        </p>
        <action-button
          type="button"
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

import "@/components/Intro/style.scss";
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
