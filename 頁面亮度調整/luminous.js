rangeInput = document.getElementById("range");
container = document.getElementsByClassName("container")[0];
num = document.getElementsByClassName("num")[0];

num.innerHTML = 100;

function light(e){
    container.style.filter = "brightness(" + rangeInput.value + "%)";
    num.innerHTML = rangeInput.value;
}

rangeInput.addEventListener("change", () => setInterval(light, 1));     /*將setInterval包裝在函數裡，因為addEventListener吃的是函數，而不是setInterval */