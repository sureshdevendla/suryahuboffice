var width1=400;
var height1=300;
function increasesize(){
     width1=width1+20;
     height1=height1+20;
    document.getElementById("img1").style.width=width1;
    document.getElementById("img1").style.height=height1;
}

function decreasesize(){
     width1=width1-20;
    height1=height1-20;
    document.getElementById("img1").style.width=width1;
    document.getElementById("img1").style.height=height1;
}