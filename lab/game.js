var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var img = new Image();

img.src = "../images/bg.png";

var x = 0;
var y = 0;


function draw() {
  ctx.drawImage(img, x, y, img.width, img.height);
}
