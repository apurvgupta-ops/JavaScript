var cards = document.querySelectorAll(".card");
// console.log(cards);

var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flipped));
function flipped() {
  //   console.log("Flipped");
  //   console.log(this);

  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    checkIt();
  }
}
function checkIt() {
  console.log("checking ..");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    failure();
  }
}
function success() {
  firstCard.removeEventListener("click", flipped);
  secondCard.removeEventListener("click", flipped);
}
function failure() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}
(function suffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
