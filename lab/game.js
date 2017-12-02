function Game(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.img = new Image();
  this.img.src = "images/bg.png";
  this.img.onload = function() {
    this.img.width = this.canvas.width;
    this.img.height = this.canvas.height;
  }.bind(this);

  this.flappy = new Flappy(this.canvas);
}
Game.prototype.draw = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height);

  this.flappy.draw();

  window.requestAnimationFrame(this.draw.bind(this));
};
// on load
var canvas = document.getElementById("canvas");
var game = new Game(canvas);

window.requestAnimationFrame(game.draw.bind(game));
