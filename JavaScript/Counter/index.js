var counter = document.getElementById("counter");
var followers = document.getElementById("followers");
var count = 1;
setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 1);

setTimeout(() => {
  followers.innerHTML = "Finally hit 1k subscribers";
}, 5000);
