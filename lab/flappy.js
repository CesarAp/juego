var SPACE = 32;
var gravity = 0.1;

function Flappy(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.img = new Image();
  this.img.src = "images/flappy.png";
  this.x = 200;
  this.y = 200;
  this.vx = 2;
  this.vy = 2;
  this.radius = 25;
  this.img.onload = function() {
  }.bind(this);
}
Flappy.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.drawImage(this.img, this.x, this.y, 100, 100);
  this.ctx.closePath();
};

Flappy.prototype.update = function() {
  ctx.clearRect(0,0, canvas.width, canvas.height);

  this.draw();
  this.x += this.vx;

  this.vy += gravity;
  this.y += this.vy;


  if ((this.y + this.radius) > canvas.height || (this.y - this.radius) < 0) {
    this.vy *= -1;
  }

  if ((this.x + this.radius) > canvas.width || (this.x - this.radius) < 0) {
    this.vx *= -1;
  }

};

Flappy.prototype.onKeyDown = function(event) {
  if (event.keyCode == SPACE) {
      this.moveUp();
  }
};
Flappy.prototype.isReady = function() {
  return this.img.isReady;
};

//Flappy.prototype.onKeyDown = function(event) {
  //if (event.keyCode == SPACE) {
    //  this.push();
  //}
//};
