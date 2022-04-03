const panels = document.querySelectorAll(".panel");
const toggleOpen = (e) => {
  //   console.log("hello");
  e.currentTarget.classList.toggle("open");
};

const textCome = (e) => {
  //   console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    e.currentTarget.classList.toggle("open-active");
  }
};

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) => panel.addEventListener("transitionend", textCome));
