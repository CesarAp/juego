function Flappy(canvas, sprite) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = 0;
  this.y = 0;
  this.scale = 0.15;
  this.speed = 10;

  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.onload = (function() {
  this.sprite.isReady = true;
  this.sprite.hFrames = 3;
  this.sprite.vFrames = 1;
  this.sprite.fWidth = Math.floor(this.sprite.width / this.sprite.hFrames);
  this.sprite.fHeight = Math.floor(this.sprite.height / this.sprite.vFrames);
  this.sprite.hfIndex = 0;
  this.sprite.vfIndex = 0;

  this.width = this.sprite.fWidth * this.scale;
  this.height = this.sprite.fHeight * this.scale;
  this.ctx.drawImage(
    this.sprite,
    50,
    50
  );
  }).bind(this);

  this.isFalling = false;

}
Flappy.prototype.draw = function() {
  if (this.isReady()) {
    this.ctx.save();

    this.ctx.restore();
  }
};

Flappy.prototype.isReady = function() {
  console.log('entro en isReady de flappy');
  return true;
};
