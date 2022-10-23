"use strict";

/* 
  Canva

 - strokeRect

 - strokeStyle

 - fillRect

 - fillStyle

 - lineWidth

 - moveTo

 - lineTo

 - closePath

 - beginPath
*/



const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = "4"
ctx.strokeStyle = "#48e";
ctx.fillStyle = "#26a";
ctx.strokeRect(50, 50, 400, 400);
ctx.fillRect(10,40, 400,200);

ctx.lineTo(100,300);
ctx.lineTo(120,350);
ctx.lineTo(100,400);
ctx.lineTo(120,450);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineTo(200,300);
ctx.lineTo(220,350);
ctx.lineTo(200,400);
ctx.lineTo(220,550);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(400,150,100,10,40);
ctx.stroke();
ctx.closePath();