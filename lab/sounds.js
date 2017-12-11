function Sound(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.snd = new SoundOne();
  this.snd.src = "music/siete.mp3";
//He usado dos técnicas para el sonido
//la que sigue:
  this.snd.isReady = false;
  this.snd.onload = function() {
  this.snd.isReady = true;
  }.bind(this);
}
  SoundOne.prototype.draw = function() {
    if (this.snd.isReady) {
      console.log("música");
    }
  };
// Y esta otra, el problema es que Sound
//no está definido según la consola
//en game.js:18 sino comento se bloquea el juego
//    document.onKey = this.onKey.bind(this);
//    this.snd.onload = function() {
//  }.bind(this);
//    }

//    SoundOne.prototype.onKey = function(event) {
//      if (event.keyCode == SPACE) {
//          this.soundUp();
//      }
//    };
//SoundOne.prototype.isReady = function() {
//  return this.snd.isReady;
//};
