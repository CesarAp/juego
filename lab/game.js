function Game(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = 0;
  this.y = 0;
  this.img = new Image();
  this.img.src = "images/bg.png";
  this.img.onload = function() {
  this.img.width = this.canvas.width;
  this.img.height = this.canvas.height;
      }.bind(this);

  this.flappy = new Flappy(this.canvas);
  //this.pipes = new Pipes(this.canvas);

}
Game.prototype.draw = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  if(this.x > this.canvas.width) {
    this.x = 0;
  }
  if(this.x > 0) {
    this.ctx.drawImage(this.img, - this.img.width + this.x, this.y, this.img.width, this.img.height);
  } else if(this.x - this.img.width > 0) {
    this.ctx.drawImage(this.img, - this.img.width * 2 + this.x, this.y, this.img.width, this.img.height);
  }

  this.ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
  this.flappy.draw();
  this.x -= 5;

  //this.pipes.draw();
  window.requestAnimationFrame(this.draw.bind(this));
};

//this.pipes.draw();
// on load
window.onload = function () {
  var canvas = document.getElementById("canvas");
  var game = new Game(canvas);

  window.requestAnimationFrame(game.draw.bind(game));
};
