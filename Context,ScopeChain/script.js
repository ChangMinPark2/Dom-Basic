const one = document.getElementById("one");
const context = one.getContext("2d");
console.log(context[Symbol(toString())]);

context.strokeStyle = "blue";
context.lineWidth = 2;
let startX, startY;
const show = (event) => {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    context.closePath();
    startX = event.offsetX, startY = event.offsetY;
};

one.addEventListener("mousedown", (event) => {
    startX = event.offsetX, startY = event.offsetY;
    one.addEventListener("mousemove", show);
});

one.addEventListener("mouseup", (event) => {
    one.removeEventListener("mousemove", show);
})