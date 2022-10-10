<template>
  <div
    id="preloader-wrapper"
    class="w-screen h-screen fixed top-0 left-0 z-50 bg-brand-green-dark"
  >
    <div
      id="top"
      class="h-1/2 absolute top-0 left-0 w-screen bg-brand-green-dark"
    ></div>
    <div
      id="logo"
      class="w-32 md:w-48 2xl:w-60 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center"
    >
      <logo />
    </div>
    <div
      id="preloader"
      class="flex flex-col items-center justify-center gap-2 w-full absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
    >
      <div id="percent" class="text-white tracking-wide">{{ percent }}%</div>
      <div
        id="bar"
        class="rounded-md h-1 w-4/5 md:max-w-xs xl:max-w-lg bg-brand-black"
        data-test="bar"
      >
        <div
          id="barconfirm"
          class="h-full rounded-md bg-brand-green"
          data-test="barconfirm"
        ></div>
      </div>
    </div>
    <div
      id="bottom"
      class="h-1/2 absolute bottom-0 left-0 w-screen bg-brand-green-dark"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { gsap } from "gsap";

import "@/components/Shared/Preloader/style.scss";
import Logo from "@/components/Shared/Logo/Logo.vue";

export default defineComponent({
  name: "Preloader",
  components: {
    Logo,
  },
  setup() {
    const percent = ref(1);
    const loading = () => {
      const tl = gsap.timeline({
        paused: true,
      });
      tl.to("#barconfirm", {
        duration: 0.8,
        width: "100%",
      })
        .to("#preloader, #logo", {
          opacity: "0",
          duration: 0.8,
          ease: "power2.inOut",
          delay: 0.5,
        })
        .to("#preloader-wrapper", {
          backgroundColor: "transparent",
        })
        .to(
          "#top",
          {
            y: "-100%",
            ease: "power4.out",
            duration: 1.5,
          },
          "vertical"
        )
        .to(
          "#bottom",
          {
            y: "100%",
            ease: "power4.out",
            duration: 1.5,
          },
          "vertical"
        )
        .set("#preloader-wrapper", {
          display: "none",
        })
        .set("body", {
          overflowY: "auto",
        });

      const barconfirm = document.querySelector("#barconfirm") as HTMLElement;
      let id: number;
      const move = () => {
        id = setInterval(frame, 10);
      };
      const frame = () => {
        if (percent.value >= 100) {
          clearInterval(id);
          tl.play();
        } else {
          percent.value++;
          barconfirm.style.width = percent.value + "%";
        }
      };
      move();
    };

    onMounted(loading);

    return {
      percent,
    };
  },
});
</script>
