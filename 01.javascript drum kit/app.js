function removeTransition(e) {
  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelectorAll(".key");
const keysArray = [...keys];
keysArray.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);
//what teacher used : const keys = Array.from(document.querySelectorAll('.key'));
window.addEventListener("keydown", playSound);
