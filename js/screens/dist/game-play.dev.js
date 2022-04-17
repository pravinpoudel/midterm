"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GamePlay =
/*#__PURE__*/
function () {
  function GamePlay(manager, input) {
    _classCallCheck(this, GamePlay);

    this.myKeyboard = input;
    this.lastTimeStamp;
    this.manager = manager;
    this.meter = null;
    this.marker = null;
    this.initialize = this.initialize.bind(this);
    this.run = this.run.bind(this);
    this.checkHandler = this.checkHandler.bind(this);
  }

  _createClass(GamePlay, [{
    key: "initialize",
    value: function initialize() {
      var self = this;
      self.myKeyboard.register("Escape", function () {
        GameState.cancelNextRequest = true;
        self.manager.showScreen("mainmenu");
      });
      this.meter = new Meter();
      this.marker = new Marker();
    }
  }, {
    key: "processInput",
    value: function processInput(elapsedTime) {
      this.myKeyboard.update(elapsedTime);
    }
  }, {
    key: "update",
    value: function update(elapsedTime) {
      this.marker.update(elapsedTime);
    }
  }, {
    key: "renderScore",
    value: function renderScore() {
      document.getElementById("currentScore").innerHTML = score;
    }
  }, {
    key: "render",
    value: function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.meter.render();
      this.marker.render();
      this.renderScore();
    }
  }, {
    key: "checkHandler",
    value: function checkHandler(elapsedTime) {
      if (this.meter.checkMarker(this.marker)) {
        this.marker = new Marker();
      }
    }
  }, {
    key: "run",
    value: function run() {
      var self = this;
      var lastTimeStamp = performance.now();
      GameState.cancelNextRequest = false;
      this.myKeyboard.register(" ", this.checkHandler);

      function gameLoop(time) {
        self.processInput(time - lastTimeStamp);
        self.update(time - lastTimeStamp);
        lastTimeStamp = time;
        self.render();

        if (!GameState.cancelNextRequest) {
          requestAnimationFrame(gameLoop);
        } else {
          context.font = '48px serif';
          context.fillText('Hello world', 10, 50); // self.manager.showScreen("mainmenu");
        }
      }

      requestAnimationFrame(gameLoop);
    }
  }]);

  return GamePlay;
}();
//# sourceMappingURL=game-play.dev.js.map
