<template>
  <div id="home">
    <intro />
    <work />
    <experience />
    <about-me />
    <get-in-touch />
    <footer-section />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Intro from "@/components/Intro/Intro.vue";
import Experience from "@/components/Experience/Experience.vue";
import Work from "@/components/SelectedWork/Work/Work.vue";
import AboutMe from "@/components/AboutMe/AboutMe.vue";
import GetInTouch from "@/components/GetInTouch/GetInTouch.vue";
import FooterSection from "@/components/Footer/Footer.vue";

export default defineComponent({
  name: "Home",
  components: {
    Intro,
    Experience,
    Work,
    AboutMe,
    GetInTouch,
    FooterSection,
  },
});
</script>
