var balls = document.getElementsByClassName("ball");

document.onmousemove = function(e){
    var x = e.clientX / window.innerWidth * 100 + "%";      /*滑鼠的水平位置 / 瀏覽器的水平距離 * 100% */
    var y = e.clientY / window.innerHeight * 100 + "%";     /*滑鼠的垂直位置 / 瀏覽器的垂直距離 * 100% */

    

    for(var i = 0; i < 2; i++){
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = "translate(-" + x + ", -" + y + ")";
    }

}

