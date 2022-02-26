var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var orange = document.querySelector(".orange");
var violet = document.querySelector(".violet");
var pink = document.querySelector(".pink");
var center = document.querySelector(".center");

const BgColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

// var pinkColor = BgColor(pink);
// pink.addEventListener("click", () => {
//   center.style.background = pinkColor;
// });

const bgColorChanger = (element, color) => {
  return element.addEventListener("click", () => {
    center.style.background = color;
  });
};

bgColorChanger(red, BgColor(red));
bgColorChanger(orange, BgColor(orange));
bgColorChanger(cyan, BgColor(cyan));
bgColorChanger(pink, BgColor(pink));
bgColorChanger(violet, BgColor(violet));
