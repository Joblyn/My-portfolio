<template>
  <section id="about-me" class="about_me_section">
    <section-header>
      About Me
      <template #paragraph>
        <p>
          Front-end enineer and UX specialist, I have 3 years of experience
          designing for web and digital media and have a horizontal approach to
          the process. I have had the chance to work for some of the biggest
          companies in Brazil, from ad agencies to software houses.
        </p>
      </template>
      <template #action>
        <action-button
          type="link"
          href="/docs/Job_Oaikhenah_CV.pdf"
          download="Job Oaikhenah's resumé"
        >
          Download my resumé</action-button
        >
      </template>
    </section-header>

    <figure>
      <span>
        <img
          :src="require(`@/assets/images/job.jpg`)"
          width="808px"
          height="493px"
          alt="A picture of myself"
          loading="lazy"
          decoding="async"
        />
      </span>
    </figure>

    <article class="highlights">
      <div>
        <highlight
          v-for="(highlight, id) in Highlights"
          :key="id"
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
    });

    return {
      Highlights,
    };
  },
});
</script>

<style scoped src="@/components/AboutMe/style.scss" lang="scss"></style>
