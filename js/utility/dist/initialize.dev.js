"use strict";

var canvas = document.getElementById("canvas-main");
var context;
var manager = new Manager();
window.addEventListener("resize", resizeCanvas, false);
var isSpacePressed = false;
GameState.menu = manager;
var screens = {
  highscores: new HighScoreMenu(manager),
  mainmenu: new MainMenu(manager),
  about: new About(manager)
};
GameState.input = new Keyboard();
console.log(GameState.input);
screens.gameplay = new GamePlay(manager, GameState.input);
GameState.screens = screens;

function resizeCanvas() {
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");
    console.log(canvas);
  }
}

resizeCanvas();
//# sourceMappingURL=initialize.dev.js.map
