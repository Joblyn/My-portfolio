import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function animate() {
  gsap.fromTo(
    ".about-me-portrait",
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "SlowMo.easeIn",
      scrollTrigger: {
        trigger: ".about-me-portrait",
        start: "top 99%",
        toggleActions: "play none none reverse",
      },
    }
  );
}
