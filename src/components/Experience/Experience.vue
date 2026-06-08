<template>
  <section
    id="experience"
    class="experience_section"
    aria-describedby="my experience"
  >
    <section-header>Experience</section-header>
    <div class="experience-wrapper">
      <div class="experience-grid">
        <div class="experience-col">
          <div class="experience-item">
            <h4>Yamify</h4>
            <p>Fullstack Software Engineer</p>
            <span>September 2025 - PRESENT</span>
          </div>
          <div class="experience-item">
            <h4>AAJ EXPRESS INC.</h4>
            <p>Senior Software Engineer (Frontend)</p>
            <span>September 2023 - August 2025</span>
          </div>
          <div class="experience-item">
            <h4>VankWallet</h4>
            <p>Frontend Software Engineer</p>
            <span>January 2023 - September 2023</span>
          </div>
        </div>
        <div class="experience-col">
          <div class="experience-item">
            <h4>Go54 (Formerly Whogohost)</h4>
            <p>Frontend Developer</p>
            <span>March 2022 - January 2023</span>
          </div>
          <div class="experience-item">
            <h4>TNN Africa</h4>
            <p>Frontend Developer</p>
            <span>February 2021 - February 2022</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, nextTick, inject } from "vue";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader.vue";
import { updateActiveLinkOnScroll } from "@/components/FixedNav/animate";
import { ActiveLinkContext } from "@/interfaces/nav";
import { animateExperienceItem } from "@/components/Experience/animate";

export default defineComponent({
  name: "Experience",
  components: {
    SectionHeader,
  },
  setup() {
    const { updateActiveLink } = inject("active-link") as ActiveLinkContext;

    const experienceItems = [
      {
        company: "AAJ EXPRESS INC.",
        role: "Senior Software Engineer",
        duration: "2023 - PRESENT",
      },
      {
        company: "VankWallet",
        role: "Frontend Engineer",
        duration: "2023",
      },
      {
        company: "Go54 (Formerly Whogohost)",
        role: "Frontend Developer",
        duration: "2022 - 2023",
      },
      {
        company: "TNN Africa",
        role: "Frontend Developer",
        duration: "2021 - 2022",
      },
    ];

    onMounted(() => {
      updateActiveLinkOnScroll("#experience", updateActiveLink);
      // animate();
      nextTick(() => {
        document.querySelectorAll(".experience-item").forEach((el) => {
          animateExperienceItem(el as HTMLElement);
        });
      });
    });

    return {
      experienceItems,
    };
  },
});
</script>

<style scoped src="@/components/Experience/style.scss" lang="scss"></style>
