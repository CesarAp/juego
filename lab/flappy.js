var SPACE = 32;
var gravity = 10;

function Flappy(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.img = new Image();
  this.img.src = "images/flappy.png";
  this.x = 200;
  this.y = 500;
  this.vx = 2;
  this.vy = 2;
  this.radius = 25;
  this.yMove = 1;
  document.onkeydown = this.onKeyDown.bind(this);
  this.img.onload = function() {
  }.bind(this);
}
Flappy.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, 100, 100);
  this.y += this.yMove * this.vx;
};

Flappy.prototype.onKeyDown = function(event) {
  if (event.keyCode == SPACE) {
      this.moveUp();
  }
};
Flappy.prototype.isReady = function() {
  return this.img.isReady;
};

Flappy.prototype.moveUp = function() {
  this.yMove = -1;
  setTimeout((function() {
    this.yMove = 1;
  }).bind(this), 3000)
  /*
  this.vy -= gravity;
  this.y += this.vy;
  if ((this.y + this.radius) > canvas.height || (this.y - this.radius) < 0) {
    this.vy *= -1;
  }
  if ((this.x + this.radius) > canvas.width || (this.x - this.radius) < 0) {
    this.vx *= -1;
  }
  */
};
  Flappy.prototype.onKeyUp = function(event) {
    if (event.keyCode == SPACE) {
    this.onKeyUp();
  }
  };

  Flappy.prototype.onKeyUp = function() {
    this.vy -= gravity;
  };
//Flappy.prototype.onKeyDown = function(event) {
  //if (event.keyCode == SPACE) {
    //  this.push();
  //}
//};
