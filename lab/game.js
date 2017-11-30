function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');

  this.canvas.width = 1000;
  this.canvas.height = 400;
  console.log('Imprimo altura de this.canvas');
  console.log(this.canvas.height);

  this.flappy = new Flappy(this.canvas, "images/flappy.png");

  this.bg = new Image();
  this.bg.src = "images/bg.png";
  console.log('Imprimo this.bg');
  console.log(this.bg);
  this.bg.xPos = 0;
  this.bg.xLand = 300;
  this.bg.speed = 10;
  this.bg.onload = (function() {
    console.log('entro en img.onload');
    this.ctx.drawImage(
      this.bg,
      this.bg.xPos,
      0
    );
    this.bg.isReady = true;
    // this.canvas.height = this.bg.height;
    console.log('Imprimo altura de this.canvas');
    console.log(this.canvas.height);
    // this.bg.xLand = this.bg.height - 80;

    this.flappy.x = 50;
    // this.flappy.y = this.bg.xLand;
    this.flappy.y = 50;
  }).bind(this);
}

Game.prototype.isReady = function() {
  console.log('Entro en game.isReady');
  console.log(this.bg.isReady);
  console.log(this.flappy.isReady());
  return this.bg.isReady && this.flappy.isReady();
};

Game.prototype.cleanGame = function() {
  console.log('Entro en la función cleanGame');
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
Game.prototype.drawBg = function() {
  console.log('Entro en this.drawBg');
  console.log(this.bg.isReady);
  if (this.bg.isReady === true) {
    console.log('Cumplo la evaluación a true the this.bg.isReady');
    console.log('Esto vale this.ctx');
    console.log(this.ctx);
    // this.ctx.save();
    console.log(this.bg.xPos);
    console.log(this.bg);

    // this.ctx.restore();
  }
};

Game.prototype.draw = function() {
  console.log('Holaaa entro en draw');
  console.log(this);
  // if (this.isReady()) {
    this.cleanGame();
    this.drawBg();
    this.flappy.draw();
  // }
  console.log('NO ESTA READY NADA PAPITOO');
  // window.requestAnimationFrame(this.draw.bind(this));
};

var game = new Game("canvas");
game.draw();
var flappy = new Flappy(game.canvas, "images/flappy.png");
flappy.draw();
