import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export const enableDrag = () => {
  const targetRect = document
    .querySelector(".work__image img")
    ?.getBoundingClientRect() as DOMRect;

  console.log("targetRect.left", targetRect.left);
  const friction = 9.8;
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
      console.log("exceededPosLeft", exceededPosLeft);
      if (exceededPosLeft) {
        return snapToPosition(this.target, 0);
      }

      const initRight = endRect.width - targetRect.left;
      const totalDist =
        Math.abs(Math.abs(endRect.left) - Math.abs(targetRect.left)) +
        window.innerWidth;
      // if right is less than initial right, snap back to position;
      const exceededPosRight =
        totalDist > initRight ? endRect.width - window.innerWidth : false;
      console.log("totalDist", totalDist);
      console.log("initRight", initRight);
      console.log("exceededPosRight", exceededPosRight);
      if (exceededPosRight) {
        return snapToPosition(this.target, `-${exceededPosRight}`);
      }

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
    console.log("slowingdown");
    const vx = velocity / (2 * friction);
    const x = (() => {
      let position;
      if (direction === "left") {
        console.log("vx", vx);
        console.log("targetRect.left", targetRect.left);
        console.log("endRect.left", endRect.left);
        console.log("endRect.left - vx", endRect.left - vx);
        console.log(
          "endRect.width + targetRect.left - window.innerWidth",
          endRect.width + targetRect.left - window.innerWidth
        );
        // willExceed = endRect.left - vx > endRect.width - targetRect.left;
        position =
          endRect.left - vx >
          endRect.width + targetRect.left - window.innerWidth
            ? endRect.width - window.innerWidth
            : endRect.left - vx - targetRect.left;
        console.log("position", position);
      }
      if (direction === "right") {
        console.log("endRect.left", endRect.left);
        console.log("vx", vx);
        console.log("endRect.left + vx", endRect.left + vx);
        console.log("targetRect.left", targetRect.left);
        position = endRect.left + vx >= targetRect.left ? 0 : endRect.left + vx;
      }
      return position;
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
