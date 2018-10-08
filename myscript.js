
function display_my_name(){
  var my_name = prompt("enter my name");
  alert("my name is " + my_name);
}

function compute_x_plus_y (x,y) {
  x = parseInt(x);
  y = parseInt(y);
  var z = x + y;
  return z;
}

function ask_for_x_and_y(){
  var x = prompt("Enter x value");
  var y = prompt("Enter y value");
  var z = compute_x_plus_y(x,y);
  document.getElementById("demo").innerHTML = z;
}

function show_topic(){
  var x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
