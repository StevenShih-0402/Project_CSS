var img = document.getElementsByClassName("img")[0],
    text = document.getElementsByClassName("text")[0],
    btn = document.getElementsByClassName("btn")[0],
    c = 0;

function hide(){
    if(c == 0){
        btn.innerHTML = "Cover Image";
        text.style.display = "none";
        img.style.filter = "blur(0)";
        c = 1;
    }
    else if(c == 1){
        btn.innerHTML = "Uncover Image";
        text.style.display = "block";
        img.style.filter = "blur(24px)";
        c = 0;
    }
}