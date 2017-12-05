var SPACE = 32;
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
};
Flappy.prototype.isReady = function() {
  return this.img.isReady;
};

Flappy.prototype.moveUp = function() {
  this.yMove = -1;
  setTimeout((function() {
    this.yMove = 1;
  }).bind(this), 3000);
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

Flappy.prototype.collide = function(elements) {
  collitions = elements.filter((function(e) {
    return e.collide(this);
  }).bind(this));

  if (collitions.length > 0) {
    if (collitions[0] instanceof Gap) {
      this.isFalling = true;
      this.fallOut();
      setInterval(this.fallOut.bind(this), 60);
    }

    return true;
  }
  return false;
};
