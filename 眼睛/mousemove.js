var mouse = document.querySelector(".mouse");

function insect(e){
    mouse.style.left = e.clientX + "px";
    mouse.style.top = e.clientY + "px";
}

var el = document.body;
el.addEventListener("mousemove", insect, false);