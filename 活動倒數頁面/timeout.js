var graduate = new Date("jun 23,2023 00:00:00").getTime();

var countdown = setInterval(function(){
    var now = new Date().getTime();
    var last = graduate - now;

    var days = Math.floor(last/(1000*60*60*24));
    var hours = Math.floor(last%(1000*60*60*24) / (1000*60*60));
    var minutes = Math.floor(last%(1000*60*60) / (1000*60));
    var seconds = Math.floor(last%(1000*60) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(last <= 0)
        clearInterval(countdown);
}, 1000);