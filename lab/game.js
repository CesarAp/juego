function Game(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = this.canvas.width;
  this.y = 0;
  this.img = new Image();
  this.img.src = "images/bg.png";
  this.img.onload = function() {
  this.img.width = this.canvas.width;
  this.img.height = this.canvas.height;
      }.bind(this);

  this.flappy = new Flappy(this.canvas);
  this.pipes =  [];

}
//Ver slack
//Game.prototype.position = function() {
  //};

Game.prototype.start = function() {
  setInterval(this.addPipe.bind(this), 2000);
  window.requestAnimationFrame(this.draw.bind(this));
};

Game.prototype.addPipe = function() {
  console.log(this.pipes.length);
  this.pipes.push(new Pipe(this.canvas, 0, 0, 100, 300));
};
Game.prototype.draw = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  if(this.x <= 0) {
    this.x = this.canvas.width;
  }
  if(this.x > 0) {
    this.ctx.drawImage(this.img, - this.img.width + this.x, this.y, this.img.width, this.img.height);
  }

  this.ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
  this.flappy.draw();
  this.x -= 5;

  for (var i = 0; i < this.pipes.length; i++) {
    this.pipes[i].draw();
  }
  window.requestAnimationFrame(this.draw.bind(this));
};

//He metido aqui collide pero tengo que confirmar
// si es correcto
Game.prototype.collide = function(elements) {
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
Game.prototype.fallOut = function() {
  if (this.isFalling) {
    this.y += this.speed;
  }
};
//Hasta aquí
window.onload = function () {
  var canvas = document.getElementById("canvas");
  var game = new Game(canvas);
  game.start();

};
