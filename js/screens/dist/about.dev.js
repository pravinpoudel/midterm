"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var About =
/*#__PURE__*/
function () {
  function About(manager) {
    _classCallCheck(this, About);

    this.manager = manager;
    this.initialize = this.initialize.bind(this);
    this.run = this.run.bind(this);
  }

  _createClass(About, [{
    key: "initialize",
    value: function initialize() {
      var self = this;
      console.log("about initialized");
      document.getElementById("id-about-back").addEventListener("click", function () {
        self.manager.showScreen("mainmenu");
      });
    }
  }, {
    key: "run",
    value: function run() {}
  }]);

  return About;
}();
//# sourceMappingURL=about.dev.js.map
