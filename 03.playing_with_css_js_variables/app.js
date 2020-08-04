const spacingBar = document.getElementById("spacing");
const blurBar = document.getElementById("blur");
const baseColor = document.getElementById("base");
const img = document.getElementById("image");

function setSpacing(val) {
  img.style.padding = `${val}px`;
}

function setBlur(val) {
  img.style.filter = `blur(${val}px)`;
}

function setColor(val) {
  img.style.background = `${val}`;
}
