import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export const enableDrag = () => {
  const friction = 7;
  const duration = 0.6;
  let targetRect: DOMRect = document
      .querySelector(".work__image img")
      ?.getBoundingClientRect() as DOMRect,
    initRect: DOMRect,
    endRect: DOMRect,
    velocity: number,
    startTime: number,
    endTime: number,
    tt: number,
    dist: number,
    direction: "left" | "right",
    oldLeft: number;

  window.addEventListener("resize", () => {
    targetRect = document
      .querySelector(".work__image img")
      ?.getBoundingClientRect() as DOMRect;
    gsap.set(".work__image img", {
      x: 0,
    });
  });

  Draggable.create(".work__image img", {
    type: "x",
    edgeResistance: 0.65,
    lockAxis: true,
    allowNativeTouchScrolling: true,
    onDragStart: function () {
      startTime = new Date().getTime();
      initRect = this.target.getBoundingClientRect();
    },
    onDrag: function () {
      const { left: newLeft } = this.target.getBoundingClientRect();
      if (oldLeft) {
        direction = newLeft < oldLeft ? "left" : "right";
      }
      oldLeft = newLeft;
    },
    onDragEnd: function () {
      endTime = new Date().getTime();
      endRect = this.target.getBoundingClientRect();
      dist = Math.abs(Math.abs(endRect.left) - Math.abs(initRect.left));
      tt = (endTime - startTime) / 1000;
      velocity = dist / tt;

      // if left is greater than initial left, snap back to position;
      const exceededPosLeft = targetRect.left < endRect.left ? true : false;
      if (exceededPosLeft) snapToPosition(this.target, 0);

      const initRight = endRect.width - targetRect.left;
      const totalDist =
        Math.abs(Math.abs(endRect.left) - Math.abs(targetRect.left)) +
        window.innerWidth;
      // if right is less than initial right, snap back to position;
      const exceededPosRight =
        totalDist > initRight ? endRect.width - window.innerWidth : false;
      if (exceededPosRight) snapToPosition(this.target, `-${exceededPosRight}`);

      slowDown(this.target);
    },
  });

  const snapToPosition = (target: HTMLElement, x: number | string) => {
    gsap.to(target, {
      x,
      duration,
      ease: "power2.easeOut",
    });
  };

  const slowDown = (target: HTMLElement) => {
    const vx = velocity * duration - 0.5 * friction * Math.pow(duration, 2);
    const x = (() => {
      let position;
      if (direction === "left") {
        position =
          Math.abs(endRect.left - vx) >= endRect.width - window.innerWidth
            ? `-${endRect.width - window.innerWidth}`
            : endRect.left - vx - targetRect.left;
      }
      if (direction === "right") {
        position = endRect.left + vx >= 0 ? 0 : endRect.left + vx;
      }
      return position;
    })();

    gsap.to(target, {
      x,
      duration,
      ease: "power2.easeOut",
    });
  };
};
