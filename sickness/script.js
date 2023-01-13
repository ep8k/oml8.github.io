function virusClicked() {
  if (localStorage.points) {
    localStorage.points = Number(localStorage.points) + 1;
  } else {
    localStorage.points = 0;
  }
  document.getElementById("points").innerHTML = localStorage.points;
}
