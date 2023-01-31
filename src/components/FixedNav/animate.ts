import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function animateFixedNav() {
  const mm = gsap.matchMedia();
  mm.add("(max-width: 767px)", () => {
    const showAnim = gsap
      .from(".floating-logo", {
        y: 100,
        paused: true,
        duration: 0.5,
        ease: "sine.in",
      })
      .progress(1);

    let param: number, checkParam: number, triggered: boolean;
    const vw10 = window.innerHeight / 10;

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: ({ direction, scroll, progress }) => {
        if (direction === 1 && scroll() >= vw10) {
          triggered = false;
          param = scroll();
          showAnim.reverse();
        }

        if (direction === -1 && !triggered) {
          checkParam = scroll();

          if (param - checkParam >= 1000 || progress === 0) {
            showAnim.play();
            triggered = true;
          }
        }
      },
    });
  });
}

export const updateActiveLinkOnScroll = (
  section: string,
  updateActiveLink: (value: string) => void
) => {
  ScrollTrigger.create({
    trigger: section,
    scroller: window,
    start: "top center",
    end: "bottom center",
    onToggle: ({ isActive }) => {
      isActive ? updateActiveLink(section) : updateActiveLink("");
    },
  });
};

export const scrollToSection = (url: string) => {
  gsap.to(window, {
    duration: 1.5,
    delay: 0.5,
    scrollTo: url,
    ease: "power2",
  });
};
