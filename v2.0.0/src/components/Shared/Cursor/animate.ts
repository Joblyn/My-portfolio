const animateCursor = () => {
  const cursor = document.querySelector(".cursor") as HTMLDivElement;
  const cursorDot = document.querySelector(".cursorDot") as HTMLDivElement;
  const links = document.querySelectorAll("a") as NodeListOf<HTMLAnchorElement>;
  const buttons = document.querySelectorAll(
    "button"
  ) as NodeListOf<HTMLButtonElement>;
  const workImages = document.querySelectorAll(
    "figure.work__image"
  ) as NodeListOf<HTMLElement>;

  const moveCursor = (e: MouseEvent): void => {
    cursorDot.style.top = cursor.style.top = e.clientY + "px";
    cursorDot.style.left = cursor.style.left = e.clientX + "px";
  };

  Array.from(links).forEach((link) => {
    link.addEventListener("mouseover", () => {
      cursor.style.height = "60px";
      cursor.style.width = "60px";
    });
    link.addEventListener("mouseleave", () => {
      cursor.style.height = "30px";
      cursor.style.width = "30px";
    });
  });

  Array.from(buttons).forEach((button) => {
    button.addEventListener("mouseover", () => {
      cursor.style.height = "60px";
      cursor.style.width = "60px";
    });
    button.addEventListener("mouseleave", () => {
      cursor.style.height = "30px";
      cursor.style.width = "30px";
    });
  });

  Array.from(workImages).forEach((image) => {
    image.addEventListener("mouseover", () => {
      cursor.style.height = "60px";
      cursor.style.width = "60px";
      cursor.style.transform = "translate(-10px, -10px)";

      cursorDot.style.width = "50px";
      cursorDot.style.height = "50px";
      cursorDot.style.transform = "translate(-5px, -5px)";
      cursorDot.textContent = "drag";
    });
    image.addEventListener("mouseleave", () => {
      cursor.style.height = "30px";
      cursor.style.width = "30px";
      cursor.style.transform = "translate(-50%, -50%)";

      cursorDot.style.width = "5px";
      cursorDot.style.height = "5px";
      cursorDot.style.transform = "translate(-50%, -50%)";
      cursorDot.textContent = null;
    });
  });

  document.addEventListener("mousemove", moveCursor);
};

export default animateCursor;
