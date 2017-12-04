function Pipes(canvas, x, y, pipes, blockWidth, blockHeight) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.img = new Image();
  this.img.src = "images/obstacle_bottom.png";
  this.x = 50;
  this.y = 100;
  this.width = 100;
  this.height = 100;

  this.pipes = pipes;
  this.width =  pipesWidth * this.pipes;
  this.height =  pipesHeight * this.pipes;

}

Pipes.prototype.collide = function(element) {
  return !(this.x + this.width < element.x ||
    element.x + element.width < this.x ||
    this.y + this.height < element.y ||
    element.y + element.height < this.y);
};

Pipes.prototype.draw = function() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
};
