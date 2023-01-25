import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export const enableDrag = () => {
  const targetRect = document
    .querySelector(".work__image img")
    ?.getBoundingClientRect() as DOMRect;
  const date = new Date();
  const friction = 0.9;
  let initRect: DOMRect,
    currRect: DOMRect,
    velocity: number,
    startTime: number,
    endTime: number,
    dist: number;

  Draggable.create(".work__image img", {
    type: "x",
    edgeResistance: 0.65,
    lockAxis: true,
    allowNativeTouchScrolling: true,
    onDragStart: function () {
      startTime = date.getTime();
      initRect = this.target.getBoundingClientRect();
    },
    onDragEnd: function () {
      endTime = date.getTime();
      currRect = this.target.getBoundingClientRect();
      dist = Math.abs(Math.abs(initRect.left) - Math.abs(currRect.left));
      velocity = dist / ((endTime - startTime) / 60);

      // if left is greater than initial left, snap back to position;
      const exceededPosLeft = targetRect.left < currRect.left ? true : false;
      if (exceededPosLeft) snapToPosition(this.target, 0);

      const totalDist =
        Math.abs(Math.abs(currRect.left) - Math.abs(targetRect.left)) +
        window.innerWidth;
      const initRight = currRect.width - targetRect.left;
      const exceededPosRight =
        totalDist > initRight ? currRect.width - window.innerWidth : false;
      // if right is less than initial right, snap back to position;
      if (exceededPosRight) snapToPosition(this.target, `-${exceededPosRight}`);

      // slowDown(this.target);
    },
  });

  const snapToPosition = (target: HTMLElement, x: number | string) => {
    gsap.to(target, {
      x,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const slowDown = (target: HTMLElement) => {
    const vx = dist * friction;
    const vt = (dist / velocity) * ((endTime - startTime) / 60);

    gsap.to(target, {
      x: vx,
      duration: vt,
      ease: "power1.out",
    });

    // s = ut - (1/2)gt^2
    // v = u^2 - 2gs => s = (u^2 - v)/2g
  };
};
