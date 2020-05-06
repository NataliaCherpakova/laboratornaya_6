let canvas = document.getElementById("draw");
let w=canvas.width=window.innerWidth;
let h=canvas.height=window.innerHeight;

let context = canvas.getContext("2d");

context.lineWidth=5;
let offsetLeft = 200;
let offsetTop  = 135;
let isMouseDown=false;

clear.onclick = function clear() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

lk.onclick = function lk() {
    canvas.addEventListener('mousemove', function (e) {
        if (isMouseDown) {
            context.fillStyle = "#ffffff";
            context.strokeStyle = "#ffffff";
            context.lineTo(e.pageX - this.offsetLeft - offsetLeft, e.pageY - this.offsetTop - offsetTop);
            context.stroke();
            context.beginPath();
            context.arc(e.pageX - this.offsetLeft - offsetLeft, e.pageY - this.offsetTop - offsetTop, context.lineWidth / 2, 0, Math.PI * 2);
            context.fill();
            context.beginPath();
            context.moveTo(e.pageX - this.offsetLeft - offsetLeft, e.pageY - this.offsetTop - offsetTop,);

        }
    })

    canvas.addEventListener('mouseup', function () {
        isMouseDown=false;
        context.fillStyle = "#ff0000";
        context.strokeStyle = "#ff0000";

    })

}

canvas.addEventListener('mousedown', function (){
    isMouseDown=true;
})

canvas.addEventListener('mouseup', function (){
    isMouseDown=false;
    context.beginPath();
})

function choosewidth() {
    var rng=document.getElementById('r1');
    context.lineWidth=parseInt(rng.value);
}

context.fillStyle = "#ff0000";
context.strokeStyle="#ff0000";
let theInput = document.getElementById("color");
theInput.addEventListener("input", function() {
    context.fillStyle = theInput.value;
    context.strokeStyle=theInput.value;
}, false);


canvas.addEventListener('mousemove', function (e) {
    if (isMouseDown){

        context.lineTo(e.pageX - this.offsetLeft - offsetLeft, e.pageY - this.offsetTop - offsetTop);

        context.stroke();
        context.beginPath();
        context.arc(e.pageX - this.offsetLeft - offsetLeft, e.pageY - this.offsetTop - offsetTop,context.lineWidth/2,0,Math.PI*2);

        context.fill();

        context.beginPath();
        context.moveTo(e.pageX - this.offsetLeft - offsetLeft, e.pageY - this.offsetTop - offsetTop,);
    }
})

