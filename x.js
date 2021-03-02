var box = document.getElementById("box");
var cizim = box.getContext("2d");

var en = box.width;
var boy = box.height;
var x = en/2;
var y = boy/2;
var dx = 2 * Math.PI;
var dy = 1 * Math.PI;

function ziplayanTop(){
    temizle();
    cizim.beginPath();
    cizim.arc(x,y,10,0,2*Math.PI);
    cizim.closePath();
    cizim.fillStyle = "#ff0000";
    x = x + dx ;
    y = y + dy ;
    cizim.fill();
    if(x >= en - 10 || x <= 10)
        dx = -1 * dx;
    if(y >= boy - 10 || y <= 10)
        dy = -1 * dy;

}
function temizle(){
    cizim.beginPath();
    cizim.fillStyle ="#c2a1e0";
    cizim.fillRect(0,0,box.width,box.height);
    cizim.closePath();
    cizim.fill();
}
setInterval(ziplayanTop,10);
