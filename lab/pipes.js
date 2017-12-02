function Pipes(canvas, x, y, blocks, blockWidth, blockHeight) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.img = new Image();
  this.img.src = "images/obstacle_bottom.png";
  this.x = 600;
  this.y = 300;

  this.blocks = blocks;
  this.width =  blockWidth * this.blocks;
  this.height =  blockHeight * this.blocks;

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
