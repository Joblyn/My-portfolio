import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export const enableDrag = () => {
  // function onDragStart() {
  //   console.log("start");
  // }

  // function onDrag(value) {
  //   console.log("onDrag", value);
  // }

  // function onDragEnd(value) {
  //   console.log("onDragEnd", value);
  // }

  Draggable.create(".work__image img", {
    type: "x",
    edgeResistance: 0.65,
    lockAxis: true,
    allowNativeTouchScrolling: true,
    snap: (value) => {
      console.log("velocity", value);
      return Math.round(value / 0.2) * 0.2;
    },
    // onDragStart: function (value) {
    //   console.log("start", value);
    // },
    // onDrag: function (value) {
    //   console.log("onDrag", value);
    // },
    onDragEnd: function () {
      // console.log("duration", this.tween.duration());
      console.log("drag end");
      // animate to position
    },
    // onThrowUpdate: function () {
    //   console.log("X: %s Y: %s", this.x, this.y);
    // },
  });
};
