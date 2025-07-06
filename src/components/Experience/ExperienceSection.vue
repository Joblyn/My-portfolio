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
            <h4>Studio Lumio - Lagos, NG</h4>
            <p>Creative Director & Developer</p>
            <span>2023 - PRESENT</span>
          </div>
          <div class="experience-item">
            <h4>Monieverse</h4>
            <p>Frontend Developer & Consultant</p>
            <span>2023 - 2025</span>
          </div>
          <div class="experience-item">
            <h4>Sunbeam Product Studio - Lagos, NG</h4>
            <p>CTO & Lead Developer</p>
            <span>2020 - 2023</span>
          </div>
          <div class="experience-item">
            <h4>Aya Trades - Sheridan WY, US</h4>
            <p>Lead Frontend Developer</p>
            <span>2022</span>
          </div>
        </div>
        <div class="experience-col">
          <div class="experience-item">
            <h4>The Blackpepper Studio - London, UK</h4>
            <p>Creative Developer</p>
            <span>2024 - PRESENT</span>
          </div>
          <div class="experience-item">
            <h4>Pickt Inc. - Delaware, US</h4>
            <p>Frontend Developer (Contract)</p>
            <span>2023</span>
          </div>
          <div class="experience-item">
            <h4>Happierleads - London, UK</h4>
            <p>Lead Frontend Developer</p>
            <span>2021 - 2022</span>
          </div>
          <div class="experience-item">
            <h4>Razu – New York, US</h4>
            <p>Frontend Developer</p>
            <span>2021</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader.vue";
import { updateActiveLinkOnScroll } from "@/components/FixedNav/animate";
import { ActiveLinkContext } from "@/interfaces/nav";

export default defineComponent({
  name: "ExperienceSection",
  components: {
    SectionHeader,
  },
  setup() {
    const { updateActiveLink } = inject("active-link") as ActiveLinkContext;

    onMounted(() => {
      updateActiveLinkOnScroll("#experience", updateActiveLink);
      // animate();
    });
  },
});
</script>

<style scoped src="@/components/Experience/style.scss" lang="scss"></style>
