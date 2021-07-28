var mouseEvent = "empty";
var last_position_of_X, last_position_of_Y;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var color = "black";
var width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("colour").value;
    width_of_line = document.getElementById("width").value;

    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", my_mouseMove);
function my_mouseMove(e) {
    var current_position_of_X = e.clientX - canvas.offsetLeft;
    var current_position_of_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of X and Y cordinated =");
        console.log("X = " + last_position_of_X + "Y = " + last_position_of_Y);

        ctx.moveTo(last_position_of_X, last_position_of_Y);

        console.log("Current position of X and Y cordinated =");
        console.log("X = " + current_position_of_X + " Y = " + current_position_of_Y);

        ctx.lineTo(current_position_of_X, current_position_of_Y);
        ctx.stroke();
    }

    last_position_of_X = current_position_of_X;
    last_position_of_Y = current_position_of_Y;
}

canvas.addEventListener("mouseup", my_mouseUp);
function my_mouseUp(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseLeave);
function my_mouseLeave(e) {
    mouseEvent = "mouseleave";
}

document.getElementById("clear").addEventListener("click", clear);
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}