import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export const enableDrag = () => {
  const targetRect = document
    .querySelector(".work__image img")
    ?.getBoundingClientRect() as DOMRect;
  const date = new Date();
  const friction = 9.8;
  let initRect: DOMRect,
    endRect: DOMRect,
    velocity: number,
    startTime: number,
    endTime: number,
    dist: number,
    direction: "left" | "right";

  Draggable.create(".work__image img", {
    type: "x",
    edgeResistance: 0.65,
    lockAxis: true,
    allowNativeTouchScrolling: true,
    onDragStart: function () {
      startTime = date.getTime();
      initRect = this.target.getBoundingClientRect();
    },
    onDrag: function () {
      // update direction every 500ms on move
      const { left: oldLeft } = this.target.getBoundingClientRect();
      setInterval(() => {
        const { left: newLeft } = this.target.getBoundingClientRect();
        direction = newLeft < oldLeft ? "left" : "right";
      }, 500);

      // direction = currRect.left < initRect.left => left
      //             currRect.left > initRect.left => right
    },
    onDragEnd: function () {
      endTime = date.getTime();
      endRect = this.target.getBoundingClientRect();
      dist = Math.abs(Math.abs(endRect.left) - Math.abs(initRect.left));
      velocity = dist / ((endTime - startTime) / 60);

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
      duration: 0.3,
      ease: "Power2.easOut",
    });
  };

  const slowDown = (target: HTMLElement) => {
    // distToStop => dist; speed (d/t); friction;
    // velocity => direction of speed
    // currRect.left(-v)
    // direction = left => snap to less x => dist
    // (Math.abs(currRect.left + targetRect.left + snapDist)(-ve)
    // direction = right => snap to greater x => currRect.left + targetRect.left + snapDist
    const vx = velocity / (2 * friction);
    const vt = (dist / velocity) * ((endTime - startTime) / 60);

    gsap.to(target, {
      x: vx,
      duration: vt,
      ease: "power1.out",
    });

    // s = ut - (1/2)gt^2
    // v^2 = u^2 - 2gs => s = (u^2 - v^2)/2g
  };
};
