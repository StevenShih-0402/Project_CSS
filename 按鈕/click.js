function play(){
    var ida = document.getElementById("push");
    ida.play();
}

function fakeoff(){
    var bkcolor = document.getElementById("bk");/*取得body的id "bk"*/

    var s = window.getComputedStyle(bkcolor);   /*取得body的css*/
    var o = s.getPropertyValue("opacity");      /*取得opacity數值的字串*/
    o = parseInt(o);                            /*字串轉數字 */

    var lighter = window.setInterval(function(){//排程(要執行的函式, 執行的間隔時間/千分之一秒(毫秒))

        o += 0.05;
        bkcolor.style.opacity = o;

        if(o == 1)
            window.clearInterval(lighter);
    }, 50);
}