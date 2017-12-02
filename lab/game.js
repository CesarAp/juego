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
  
  if (this.bg.isReady) {
      this.ctx.save();
      this.ctx.drawImage(
        this.bg,
        this.bg.xPos,
        0
        );
      this.ctx.restore();
    }
  this.flappy.draw();

  window.requestAnimationFrame(this.draw.bind(this));
};
// on load
var canvas = document.getElementById("canvas");
var game = new Game(canvas);

window.requestAnimationFrame(game.draw.bind(game));
//window.setInterval(game.draw,30);

//setInterval(function()) {
  //game.update();
//}, 30);
