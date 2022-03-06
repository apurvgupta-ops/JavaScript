var cards = document.querySelectorAll(".card");
var isFlipped = false;
var firstCard;
var secondCard;

const flip = (e) => {
  console.log("Flipped");
  e.currentTarget.classList.toggle("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = e.currentTarget;
  } else {
    secondCard = e.currentTarget;
    check();
  }
};
cards.forEach((card) => card.addEventListener("click", flip));

const check = () => {
  firstCard.dataset.image === secondCard.dataset.image ? success() : failure();
};
const success = () => {
  console.log("success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
};
const failure = (e) => {
  console.log("failure");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
};
const reset = () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
};

//IIFE
(suffle = () => {
  console.log("Suffle");
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
