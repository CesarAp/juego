function Top(canvas, x, y, width, height) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.img = new Image();
  this.img.src = "images/obstacle_top.png";
  this.img.isReady = false;
  this.img.onload = function() {
    this.img.isReady = true;
  }.bind(this);

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}
// Ver si va bien con el prototype.collide de game.js
//Top.prototype.collide = function(element) {
  //return !(this.x + this.width < element.x ||
    //element.x + element.width < this.x ||
    //this.y + this.height < element.y ||
    //element.y + element.height < this.y);
//};

Top.prototype.draw = function() {
  if (this.img.isReady) {
    this.ctx.drawImage(this.img,
      this.x,
      this.y,
      this.img.width,
      this.img.height);
  }
  this.x -= 3;

};