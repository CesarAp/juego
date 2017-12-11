
function Game(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  this.x = this.canvas.width;
  this.y = 0;
  this.img = new Image();
  this.img.src = "images/bg.png";
  this.img.onload = function() {
  this.img.width = this.canvas.width;
  this.img.height = this.canvas.height;
      }.bind(this);
this.elements = [];

  this.flappy = new Flappy(this.canvas);
  this.pipes =  [];
  this.top = [];
  //this.snd = new SoundOne(this.canvas);

}
//Preguntar al respecto de la posición de las pipes
//porque aquí estoy seleccionando pero no posicionando
//Game.prototype.RandomPosition = function() {
//this.pipes.Math.floor(Math.random() * array.length);
//return (array[this.pipes]);
//  };

Game.prototype.start = function() {
  setInterval(this.addPipe.bind(this), 2000);
  window.requestAnimationFrame(this.draw.bind(this));
};
//Game.prototype.startTwo = function() {
  //setInterval(this.addTop.bind(this), 2000);
  //window.requestAnimationFrame(this.draw.bind(this));
//};
Game.prototype.addPipe = function() {
  this.top.push(new Top(this.canvas, 500, 0, 150, 300));
  this.pipes.push(new Pipe(this.canvas, 500, this.canvas.height - 100, 150, 300));
  //for (var i = 0; i < 8; i++)
    //  if (i != addPipe && i != addPipe + 1)
      //    this.addPipe(400, i * 60 + 10);
};

/*

addRowOfPipes: function() {
    // Randomly pick a number between 1 and 5
    // This will be the hole position
    var hole = Math.floor(Math.random() * 5) + 1;

    // Add the 6 pipes
    // With one big hole at position 'hole' and 'hole + 1'
    for (var i = 0; i < 8; i++)
        if (i != hole && i != hole + 1)
            this.addOnePipe(400, i * 60 + 10);
},

*/

Game.prototype.draw = function() {
  if (!this.collide()) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.x <= 0) {
      this.x = this.canvas.width;
    } else if(this.x > 0) {
      this.ctx.drawImage(this.img, - this.img.width + this.x, this.y, this.img.width, this.img.height);
    }
    this.ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
    this.x -= 5;

    this.flappy.draw();

    for (var i = 0; i < this.pipes.length; i++) {
      this.pipes[i].draw();
    }

    for (var j = 0; j < this.top.length; j++) {
      this.top[j].draw();
    }
    this.drawIntervalId = window.requestAnimationFrame(this.draw.bind(this));
  } else {
    //TODO Game OVEr
    window.cancelAnimationFrame(this.drawIntervalId);
  }

};

//He metido aqui collide pero tengo que confirmar
// si es correcto
Game.prototype.collide = function() {
  return this.flappy.collide(this.top) || this.flappy.collide(this.pipes);
};

//Game.prototype.fallOut = function() {
  //if (this.isFalling) {
    //this.y += gravity;
  //}
//};


window.onload = function () {
  var canvas = document.getElementById("canvas");
  var game = new Game(canvas);
  game.start();
};
