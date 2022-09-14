<template>
  <div
    id="preloader-wrapper"
    class="w-screen h-screen fixed top-0 left-0 z-50 bg-transparent"
  >
    <div
      id="top"
      class="h-1/2 absolute top-0 left-0 w-screen bg-brand-green-dark"
    ></div>
    <div
      id="preloader"
      class="flex flex-col items-center justify-center gap-2 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
    >
      <div>
        <img
          src="@/assets/images/logo.svg"
          class="w-48 mb-10"
          alt="logo"
          data-test="logo"
        />
      </div>
      <div id="percent" class="text-white tracking-wide">{{ percent }}%</div>
      <div
        id="bar"
        class="rounded-md h-1 w-4/5 max-w-xs bg-brand-black"
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
import "@/components/Preloader/style.scss";
import { gsap } from "gsap";

export default defineComponent({
  name: "Preloader",
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
        .to("#preloader", {
          opacity: "0",
          duration: 0.8,
          ease: "power2.inOut",
          delay: 0.5,
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
