"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Marker =
/*#__PURE__*/
function () {
  function Marker() {
    _classCallCheck(this, Marker);

    this.width = 15;
    this.height = 100;
    this.x = Math.floor(canvas.width / 4);
    this.y = Math.floor(canvas.height / 2.3);
    this.render = this.render.bind(this);
    this.cSpeed = canvas.width / 2;
    this.direction = 1;
    this.update = this.update.bind(this);
  }

  _createClass(Marker, [{
    key: "update",
    value: function update(timeStamp) {
      this.x += this.direction * this.cSpeed * timeStamp * 0.001;

      if (this.x + this.width + 5 >= Math.floor(canvas.width * 0.75) || this.x <= canvas.width * 0.25) {
        this.direction *= -1;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      context.strokeStyle = "#000000";
      context.lineWidth = 5;
      context.fillStyle = "yellow";
      context.fillRect(self.x, self.y, self.width, self.height);
      context.strokeRect(self.x, self.y, self.width, self.height);
    }
  }]);

  return Marker;
}();
//# sourceMappingURL=marker.dev.js.map
