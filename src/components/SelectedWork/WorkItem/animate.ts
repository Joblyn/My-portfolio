import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export const enableDrag = () => {
  const targetRect = document
    .querySelector(".work__image img")
    ?.getBoundingClientRect() as DOMRect;
  // const date = new Date();
  const friction = 5;
  let initRect: DOMRect,
    endRect: DOMRect,
    velocity: number,
    startTime: number,
    endTime: number,
    tt: number,
    dist: number,
    direction: "left" | "right",
    oldLeft: number;

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
        console.log("oldleft", oldLeft);
        console.log("newleft", newLeft);
        direction = newLeft < oldLeft ? "left" : "right";
        console.log("direction", direction);
      }
      oldLeft = newLeft;
    },
    onDragEnd: function () {
      console.log("drag end");
      endTime = new Date().getTime();
      endRect = this.target.getBoundingClientRect();
      dist = Math.abs(Math.abs(endRect.left) - Math.abs(initRect.left));
      console.log("distance travelled", `${dist} px`);
      console.log("startTime", startTime);
      console.log("endTime", endTime);
      tt = (endTime - startTime) / 1000;
      console.log("time taken", `${tt} + "s"`);
      velocity = dist / tt;
      console.log("velocity", `${velocity} px/s`);

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
      ease: "power2.easeOut",
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
    const x = (() => {
      let postion, willExceed: boolean;
      if (direction === "left") {
        willExceed = endRect.left - vx > window.innerWidth;
        postion =
          endRect.left - vx > endRect.width - window.innerWidth
            ? endRect.width - window.innerWidth
            : endRect.left - vx;
      } else {
        // postion = endRect.left + vx > targetRect.left ? : 
      }
      // const postion = direction === "left" ? endRect.left - vx : endRect.left + vx;
    })();
    const vt = (dist / velocity) * tt;
    console.log("{vx, x, vt}", { x, vx, vt });

    gsap.to(target, {
      x,
      duration: 0.3,
      ease: "power2.easeOut",
    });

    // s = ut - (1/2)gt^2
    // v^2 = u^2 - 2gs => s = (u^2 - v^2)/2g
  };
};
