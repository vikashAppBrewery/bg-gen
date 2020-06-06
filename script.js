// Linear gradient

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bg = document.getElementById("bg");
var button = document.querySelector("button");
function colorGen() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.floor(Math.random() * 256);
  const d = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  rgb = "rgb(" + r + "," + g + "," + b + ")";
  rgb2 = "rgb(" + a + "," + d + "," + c + ")";

  bg.style.background = "linear-gradient(to right," + rgb + ", " + rgb2 + ")";
  css.textContent = bg.style.background + ";";
}

function bgColor() {
  bg.style.background =
    "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
  css.textContent = bg.style.background + ";";
}

// function randomColor() {
//   bg.style.background =
//     "linear-gradient(to right," + color + ", " + color + ")";
//   css.textContent = bg.style.background + ";";
// }

bg.style.background =
  "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
css.textContent = bg.style.background + ";";

color1.addEventListener("input", bgColor);

color2.addEventListener("input", bgColor);
button.addEventListener("click", colorGen);

// Radial gradient
var radialText = document.getElementById("text-radial");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var bg2 = document.getElementById("bg-2");
var button2 = document.getElementById("button-2");

function colorGen2() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.floor(Math.random() * 256);
  const d = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  rgb = "rgb(" + r + "," + g + "," + b + ")";
  rgb2 = "rgb(" + a + "," + d + "," + c + ")";

  bg2.style.background = "radial-gradient(" + rgb + ", " + rgb2 + ")";
  radialText.textContent = bg2.style.background + ";";
}

function bgColor2() {
  bg2.style.background =
    "radial-gradient(" + color3.value + ", " + color4.value + ")";
  radialText.textContent = bg2.style.background + ";";
}

bg2.style.background =
  "radial-gradient(" + color3.value + ", " + color4.value + ")";
radialText.textContent = bg2.style.background + ";";

color3.addEventListener("input", bgColor2);

color4.addEventListener("input", bgColor2);

button2.addEventListener("click", colorGen2);
