<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Canvas</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        body{
            display: flex;
            background-color: #596768;
            justify-content: center;
        }
        h1{
            text-align: center;
            margin-bottom:1em;
            color: #ecd38c;
            font-weight: 800;
            line-height: 1em;
        }
        div{
            margin-top: 1em;
            display: block;
        }
     
    </style>
    
</head>
<body>
    
    <div>
    <h1>Zıplayan Ball</h1>

    <canvas id="box" width="750" height="650" style="border:1px solid">

    </canvas>
</div>

<script >
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

</script>
</body>
</html>
