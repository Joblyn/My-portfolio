<template>
  <section
    id="about-me"
    class="about_me_section"
    aria-describedby="about Job Oaikhenah"
  >
    <section-header>
      About Me
      <template #paragraph>
        <p>
          Front-end Software engineer and UI specialist, I have 3 years of
          experience developing for the web and have a horizontal approach to
          the process. I have had the opportunity to develope multiple software
          applications across several industries with a large user base.
        </p>
      </template>
      <template #action>
        <action-button
          btnType="link"
          target="_blank"
          href="https://docs.google.com/document/d/1HgR4QD6E-mQFEF4kpsP_FJBX5NgO69x0_Tvbr4G-3Qw/edit?usp=sharing"
          download="Job Oaikhenah's resumé"
        >
          Download my resumé</action-button
        >
      </template>
    </section-header>

    <figure>
      <span class="about-me-portrait">
        <img
          :src="require(`@/assets/images/job.jpg`)"
          width="808px"
          height="493px"
          alt="A picture of Job"
          loading="lazy"
          decoding="async"
        />
      </span>
    </figure>

    <article class="highlights">
      <div>
        <highlight
          v-for="highlight in Highlights"
          :key="highlight.id"
          :id="highlight.id"
          :icon="highlight.icon"
          :name="highlight.name"
          :article="highlight.article"
        />
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";

import { updateActiveLinkOnScroll } from "@/components/FixedNav/animate";
import { ActiveLinkContext } from "@/interfaces/nav";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader.vue";
import ActionButton from "@/components/Shared/ActionButton/ActionButton.vue";
import Highlight from "@/components/AboutMe/Highlight/Highlight.vue";
import Highlights from "@/fixtures/highlights";
import animate from "@/components/AboutMe/animate";

export default defineComponent({
  name: "AboutMe",
  components: {
    SectionHeader,
    ActionButton,
    Highlight,
  },
  setup() {
    const { updateActiveLink } = inject("active-link") as ActiveLinkContext;

    onMounted(() => {
      updateActiveLinkOnScroll("#about-me", updateActiveLink);
      animate();
    });

    return {
      Highlights,
    };
  },
});
</script>

<style scoped src="@/components/AboutMe/style.scss" lang="scss"></style>
