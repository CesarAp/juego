var SPACE = 32;
var W = 119;
var gravity = 10;

function Flappy(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.img = new Image();
  this.img.src = "images/flappy.png";
  this.x = 200;
  this.y = 300;
  this.vx = 2;
  this.vy = 2;
  this.radius = 25;
  this.yMove = 1;
  this.width = 100;
  this.height = 100;
  document.onkeydown = this.onKeyDown.bind(this);
    this.img.onload = function() {
  }.bind(this);
}
Flappy.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    this.y += this.yMove * this.vx;

};

Flappy.prototype.onKeyDown = function(event) {
  if (event.keyCode == SPACE) {
      this.moveUp();
  }
  if (event.keyCode == W)
    this.moveDown();
};
Flappy.prototype.isReady = function() {
  return this.img.isReady;
};

Flappy.prototype.moveUp = function() {
  this.yMove = -1;
  setTimeout((function() {
    this.yMove = 1;
  }).bind(this), 3000);
  console.log("UP");

};

/*Flappy.prototype.onKeyUp = function(event) {
  if (event.keyCode == SPACE) {
  this.moveDown();
}
};
*/
Flappy.prototype.moveDown = function() {
this.yMove = 5;
setTimeout((function() {
  this.yMove = -1;
}).bind(this), 3000);
console.log("DOWN");

};


Flappy.prototype.collide = function(elements) {
  collitions = elements.filter((function(e) {
    return e.collide(this);
  }).bind(this));

  if (collitions.length > 0) {
    if (collitions[0] instanceof Flappy) {
      this.isFalling = true;
      this.fallOut();
      setInterval(this.fallOut.bind(this), 60);
    }

    return true;
  }
  return false;
};
