import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const animateExperienceItem = (el: HTMLElement) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "SlowMo.easeIn",
      scrollTrigger: {
        trigger: el,
        start: "top 99%",
        toggleActions: "play none none reverse",
      },
    }
  );
};
