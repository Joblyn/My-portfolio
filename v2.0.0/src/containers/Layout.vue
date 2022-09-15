<template>
  <div>
    <preloader />
    <div ref="mainPage">
      <fixed-nav />
      <page />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  // onMounted, ref
} from "vue";
import FixedNav from "@/components/FixedNav/FixedNav.vue";
import Page from "@/containers/Page.vue";
import Preloader from "@/components/Preloader/Preloader.vue";
// import gsap from "gsap";

export default defineComponent({
  name: "Layout",
  components: {
    FixedNav,
    Page,
    Preloader,
  },
  setup() {
    // const mainPage = ref(null);
    // const onPreloaderComplete = () => {
    //   gsap.set(mainPage, {
    //     display: "none",
    //   });
    //   const tl = gsap.timeline();
    //   tl.to(mainPage, {
    //     delay: 5.1,
    //     duration: 0.8,
    //     opacity: 1,
    //     display: "block",
    //   }).to(".shape1", {
    //     strokeDashoffset: "500%",
    //   });
    // };
    // onMounted(onPreloaderComplete);
  },
});
</script>
