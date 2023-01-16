// import gsap from "gsap";

const animateCursor = () => {
  const cursor = document.querySelector("#cursor") as HTMLDivElement;
  const cursorDot = document.querySelector("#cursorDot") as HTMLDivElement;

  const moveCursor = (e: MouseEvent): void => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  };

  document.addEventListener("mouseLeave", () => {
    cursor.classList.remove("opacity-100");
    cursor.classList.add("opacity-0");
  });

  document.addEventListener("mouseover", () => {
    cursor.classList.remove("opacity-0");
    cursor.classList.add("opacity-100");
  });

  window.addEventListener("mousemove", moveCursor);
};

export default animateCursor;
