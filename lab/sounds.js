function Sound(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
//He metido new Image para apañarlo
  this.snd = new Image();
  this.snd.src = "music/siete.mp3";
//He usado dos técnicas para el sonido
//la que sigue:
//  this.snd.isReady = false;
//  this.snd.onload = function() {
//  this.snd.isReady = true;
//  }.bind(this);
//}
//  Sound.prototype.draw = function() {
//    if (this.snd.isReady) {
//    console.log("música");
//    }
//  };
// Y esta otra, el problema es que Sound
//no está definido según la consola
//en game.js:18 sino comento se bloquea el juego
    document.onkey = this.onKey.bind(this);
    this.snd.onload = function() {
  }.bind(this);
    }

    Sound.prototype.onKey = function(event) {
      if (event.keyCode == SPACE) {
          this.soundUp();
      }
    };
Sound.prototype.isReady = function() {
  return this.snd.isReady;
};

Sound.prototype.draw = function() {
  if (this.snd.isReady) {
    console.log("SOUND");
}
};
