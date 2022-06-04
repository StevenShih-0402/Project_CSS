function insert(num){
    document.form.io.value += num;
}

function equal(){
    var total = document.form.io.value;
    if(total){
        document.form.io.value = eval(total);
    }
}

function clean(){
    document.form.io.value="";
}

function back(){
    var total = document.form.io.value;
    document.form.io.value = total.substring(0, total.length-1);
}