var rotation = 0;

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
  var tempPs = Number(localStorage.income);
  localStorage.points = Number(localStorage.points) + (tempPS / 50);
  } else {
    localStorage.income = 1;
  }
  rotation = rotation + 0.3;
  document.getElementById("virusImage").style.transform = "rotate(rotation)";
  document.getElementById("points").innerHTML = Math.round(localStorage.points);
}, 20}
