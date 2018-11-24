
function italique (){
    var element = document.getElementById("p2");
    element.classList.toggle("mystyle");
    
}
function gras (){
    var element = document.getElementById("p2");
    element.classList.toggle("bold");
}
function underline(){
    var element = document.getElementById("p2");
    element.classList.toggle("khat");
}

function myfunction(){
    var x = document.getElementById("myselect").value;
    document.getElementById("p2").style.fontFamily=x;
   
}
function myfunction2(){
    var y = document.getElementById("myselect2").value;
    document.getElementById("p2").style.fontSize=y;
    console.log(y)
}

