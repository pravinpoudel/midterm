"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Meter =
/*#__PURE__*/
function () {
  function Meter() {
    _classCallCheck(this, Meter);

    this.width = canvas.width / 2;
    this.x = Math.floor(canvas.width / 4);
    this.y = Math.floor(canvas.height / 2.3);
    this.height = 100;
    this.shadedWidth = Math.floor(this.width * 0.75);
    this.shadedHeight = this.height;
    this.shadedX = Math.floor(canvas.width / 2 - this.shadedWidth / 2);
    this.shadedY = this.y;
    this.reduceRate = 0.2 * this.shadedWidth;
    this.render = this.render.bind(this);
    this.checkMarker = this.checkMarker.bind(this);
  }

  _createClass(Meter, [{
    key: "checkMarker",
    value: function checkMarker(marker) {
      var issInside = this.shadedX < marker.x + marker.width && marker.x < this.shadedX + this.shadedWidth;

      if (issInside) {
        score += scoreMultiplier * 10;
        scoreMultiplier += 0.20;

        if (scoreMultiplier >= 1.8) {
          GameState.cancelNextRequest = true;
          add(score);
        }

        this.shadedWidth -= this.reduceRate;
        this.shadedX = Math.floor(canvas.width / 2 - this.shadedWidth / 2);
      } else {
        GameState.cancelNextRequest = true;
        add(score);
      }

      return issInside;
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      context.strokeStyle = "#000000";
      context.lineWidth = 5;
      context.fillStyle = "blue";
      context.fillRect(self.x, self.y, self.width, self.height);
      context.strokeRect(self.x, self.y, self.width, self.height);
      context.fillStyle = "green";
      context.fillRect(self.shadedX, self.shadedY, self.shadedWidth, self.shadedHeight);
      context.strokeRect(self.shadedX, self.shadedY, self.shadedWidth, self.shadedHeight);
    }
  }]);

  return Meter;
}();
//# sourceMappingURL=meter.dev.js.map
