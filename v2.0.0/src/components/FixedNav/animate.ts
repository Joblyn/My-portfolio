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

  // update nav link style
  // const links = gsap.utils.toArray<HTMLAnchorElement>(".navigation__item");
  // const sections = gsap.utils.toArray<HTMLElement>("#main section");

  // links.forEach((btn: HTMLAnchorElement, index: number): void => {
  //   btn.addEventListener("click", () => {
  //     gsap.to("#main", {
  //       duration: 1,
  //       scrollTo: {
  //         y: sections[index],
  //         autoKill: true,
  //       },
  //       ease: "power2",
  //     });

  //     for (let i = 0; i < 4; i++) {
  //       const prev = links;
  //       if (prev[i].classList.contains("active")) {
  //         prev[i].classList.remove("active");
  //       }
  //     }
  //     btn.classList.add("active");
  //   });
  // });

  // sections.forEach((section, i) => {
  //   ScrollTrigger.create({
  //     trigger: section,
  //     scroller: "#main",
  //     start: "top center",
  //     end: "bottom center",
  //     onToggle: (self) => {
  //       self.isActive
  //         ? links[i].classList.add("active")
  //         : links[i].classList.remove("active");
  //     },
  //   });
  // });
}

export const updateActiveLinkOnScroll = (
  section: string,
  updateActiveLink: (value: string) => void
) => {
  ScrollTrigger.create({
    trigger: section,
    scroller: "#main",
    start: "top center",
    end: "botton center",
    onToggle: (self) => {
      self.isActive && updateActiveLink(section);
    },
  });
};

export const scrollToSection = (url: string) => {
  const section = document.querySelector(url) as HTMLElement;
  gsap.to("#main", {
    duration: 1,
    scrollTo: {
      y: section,
      autoKill: true,
    },
    ease: "power2",
  });
};
