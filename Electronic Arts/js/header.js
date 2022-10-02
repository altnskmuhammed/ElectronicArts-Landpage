function question() {
  var x = document.getElementById("question");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function user() {
  var y = document.getElementById("user");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
function more() {
  var y = document.getElementById("more");
  var n = document.querySelector("#black");
  if (y.style.display === "none" && n.style.display === "none") {
    y.style.display = "block";
    n.style.display = "block";
  } else {
    y.style.display = "none";
    n.style.display = "none";
  }
}
function aside() {
  var f = document.querySelector("#more");
  var n = document.querySelector("#black");

  if (f.style.display === "none" && n.style.display === "none") {
    f.style.display = "block";
    n.style.display = "block";
  } else {
    f.style.display = "none";
    n.style.display = "none";
  }
}
