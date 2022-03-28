function playSound(e) {
  //   console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //   console.log(audio);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  //   console.log(key);
  if (!audio) {
    return;
  }
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}
window.addEventListener("keydown", playSound);

function removeTransition(e) {
  //   console.log(e);
  //   console.log(e.propertyName);
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => addEventListener("transitionend", removeTransition));
