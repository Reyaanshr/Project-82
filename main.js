canvas = document.getElementById("OlympicCanvas");
ctx = canvas.getContext("2d");
color = "red";
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if(mouseEvent = "mouseDown"){
        ctx.beginPath()
        ctx.strokestyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_x , current_position_of_y , radius , 0 , 2*Math.PI);
        ctx.stroke();
    }
}
