const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const progressLine = document.getElementById("progress");

const circles = document.querySelectorAll(".circle");

let level = 0;
let line = 0;

const lineWidth = function (level) {
  line = level * (350 / 3);
  progressLine.style.width = `${line}px`;
};
const circleActiveUp = function (level) {
  circles[level].classList.add("active");
};
const circleActiveDown = function (level) {
  circles[level + 1].classList.remove("active");
};

btnNext.addEventListener("click", function (e) {
  if (level === 3) return;
  btnPrev.removeAttribute("disabled");
  level++;
  if (level === 3) btnNext.setAttribute("disabled", "");

  console.log(level);
  lineWidth(level);

  circleActiveUp(level);
});

btnPrev.addEventListener("click", function () {
  btnNext.removeAttribute("disabled");
  if (level === 0) return;
  level--;
  if (level === 0) btnPrev.setAttribute("disabled", "");
  console.log(level);
  lineWidth(level);
  circleActiveDown(level);
});
