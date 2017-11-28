function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');
  this.canvas.width = 400;
  this.canvas.height = 700;

//this.elements = [];
  //this.elements.push(new Gap(canvas, 1120, 220, 2, 17, 17));
  //this.elements.push(new Gap(canvas, 100, 220, 2, 17, 17));

 this.flappy = new FlappyFistrum(this.canvas, "../images/flappy.png");

  this.bg = new Image();
  this.bg.src = "../images/bg.png";
  alert(1);
  this.bg.xPos = 0;
  this.bg.xLand = 0;
  this.bg.speed = 10;
  this.bg.onload = (function() {
    this.bg.isReady = true;
    this.canvas.height = this.bg.height;
    this.bg.xLand = this.bg.height - 80;

    this.flappy.x = 50;
    this.flappy.y = this.bg.xLand;
  }).bind(this);

}
Game.prototype.isReady = function() {
  return this.bg.isReady && this.flappy.isReady();
};
Game.prototype.drawBg = function() {
  if (this.bg.isReady) {
    this.ctx.save();
    this.ctx.drawImage(
      this.bg,
      this.bg.xPos,
      0
      );
    this.ctx.restore();
  }
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
Game.prototype.draw = function() {
  if (this.isReady()) {
    this.clear();
    this.drawBg();
    this.flappy.draw();
  }
  window.requestAnimationFrame(this.draw.bind(this));
};
var game = new Game("canvas");
game.draw();
