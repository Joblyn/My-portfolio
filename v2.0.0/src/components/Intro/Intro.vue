<template>
  <header id="intro" class="header loaded">
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
        <p class="header__subtitle">Welcome to my online portfolio and CV</p>
        <p>
          I'm a Frontend Engineer, I build user-friendly, intuitive and
          accessible web applications. He is skilled, with a wealth of
          experience, in multiple frontend technologies including: HTML, CSS,
          JavaScript, jQuery, ReactJS, VueJs and a host of others. I have keen
          problem-solving skills with the use of technology and is an avid
          learner, ready and willing to take on new challenges. I'm a community
          enthusiast and an active member of multiple tech communities
          including. I also technical articles at my leisure.
        </p>
        <action-button
          type="link"
          classType="solid"
          :header="true"
          link="#selected-works"
        >
          View My Works
        </action-button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@/components/Intro/style.scss";
import ActionButton from "@/components/ActionButton/ActionButton.vue";

export default defineComponent({
  name: "Intro",
  components: {
    ActionButton,
  },
});
</script>
