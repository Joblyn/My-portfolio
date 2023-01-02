import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load, resize",
});

export default function animateFixedNav() {
  const mm = gsap.matchMedia();
  mm.add("(max-width: 767px)", () => {
    const showAnim = gsap
      .from(".floating-logo", {
        y: 100,
        paused: true,
        duration: 0.85,
        ease: "sine.out",
      })
      .progress(1);

    let param: number, checkParam: number, triggered: boolean;
    const vw10 = window.innerHeight / 10;

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === 1 && self.scroll() >= vw10) {
          triggered = false;
          param = self.scroll();
          showAnim.reverse();
        }

        if (self.direction === -1 && !triggered) {
          checkParam = self.scroll();

          if (param - checkParam >= 1000 || self.progress === 0) {
            showAnim.play();
            triggered = true;
          }
        }
      },
    });
  });

  const work = document.querySelector("#selected-work") as HTMLElement;
  const aboutMe = document.querySelector("#about-me") as HTMLElement;
  const getInTouch = document.querySelector("#get-in-touch");
  const articles = document.querySelector("#articles");

  console.log("work", work.getBoundingClientRect().top);
  // update nav link style
  const links = gsap.utils.toArray(".navigation__item");
  const sections = gsap.utils.toArray("#main section");

  links.forEach((btn: HTMLElement, index: number): void => {
    btn.addEventListener("click", () => {
      gsap.to("#main", {
        duration: 1,
        scrollTo: {
          y: sections[index],
          autoKill: true,
          ease: "power2",
        },
      });
    });
  });
}
