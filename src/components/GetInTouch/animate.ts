import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function animate() {
  gsap.fromTo(
    "#contact__form > div",
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "SlowMo.easeIn",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".contact__form",
        start: "top 99%",
        toggleActions: "play none none reverse",
      },
    },
  );

  gsap.fromTo(
    ".social",
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.3,
      ease: "SlowMo.easeIn",
      scrollTrigger: {
        trigger: ".social",
        start: "top 99%",
        toggleActions: "play none none reverse",
      },
    },
  );
}
