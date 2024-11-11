function add(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    var c=Number(a)+Number(b);
    document.getElementById("ans").innerHTML=c;
}
function substract(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    var c=Number(a)-Number(b);
    document.getElementById("ans").innerHTML=c;
}
function multiply(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    var c=Number(a)*Number(b);
    document.getElementById("ans").innerHTML=c;
}
function divide(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    var c=Number(a)/Number(b);
    document.getElementById("ans").innerHTML=c;
}