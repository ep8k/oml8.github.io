function virusClicked() {
  if (localStorage.points) {
    localStorage.points = Number(localStorage.points) + 1;
  } else {
    localStorage.points = 0;
  }
  document.getElementById("points").innerHTML = localStorage.points;
}



setInterval(function() {
  if (localStorage.income) {
    localStorage.points = Number(localStorage.points) + (Number(localStorage.income) / 50);
  } else {
    localStorage.income = 0;
  }
  document.getElementById("points").innerHTML = points;
}, 20}
