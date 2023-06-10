import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function animate(target: HTMLElement, id: number) {
  const createAnimation = (screen: string) => {
    const delay = screen === "small" ? (id % 2 ? 0.3 : 0) : id ? 0.3 * id : 0;
    gsap.fromTo(
      target,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay,
        ease: "SlowMo.easeIn",
        scrollTrigger: {
          trigger: target,
          start: "top 99%",
          toggleActions: "play none none reverse",
        },
      },
    );
  };

  const mm = gsap.matchMedia();

  // small screens
  mm.add("(max-width: 979px)", () => {
    createAnimation("small");
  });

  // large screens
  mm.add("(min-width: 980px)", () => {
    createAnimation("large");
  });
}
