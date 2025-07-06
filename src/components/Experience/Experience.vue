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
            <h4>AAJ EXPRESS INC.</h4>
            <p>Senior Software Engineer</p>
            <span>2023 - PRESENT</span>
          </div>
          <div class="experience-item">
            <h4>VankWallet</h4>
            <p>Frontend Engineer</p>
            <span>2023</span>
          </div>
        </div>
        <div class="experience-col">
          <div class="experience-item">
            <h4>Go54 (Formerly Whogohost)</h4>
            <p>Frontend Developer</p>
            <span>2022 - 2023</span>
          </div>
          <div class="experience-item">
            <h4>TNN Africa</h4>
            <p>Frontend Developer</p>
            <span>2021 - 2022</span>
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

    onMounted(() => {
      updateActiveLinkOnScroll("#experience", updateActiveLink);
      // animate();
      nextTick(() => {
        document.querySelectorAll(".experience-item").forEach((el) => {
          animateExperienceItem(el as HTMLElement);
        });
      });
    });
  },
});
</script>

<style scoped src="@/components/Experience/style.scss" lang="scss"></style>
