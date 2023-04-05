

var boxes = document.getElementsByClassName("box");
var currentIndex = 0;

function changeColor() {
  boxes[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % boxes.length;
  boxes[currentIndex].classList.add("active");
}