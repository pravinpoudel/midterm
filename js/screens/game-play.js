class GamePlay {
  constructor(manager, input) {
    this.myKeyboard = input;
    this.lastTimeStamp;
    this.manager = manager;
    this.meter = null;
    this.marker = null;
    this.initialize = this.initialize.bind(this);
    this.run = this.run.bind(this);
    this.checkHandler = this.checkHandler.bind(this);
  }

  initialize() {
    let self = this;
    self.myKeyboard.register("Escape", function () {
      GameState.cancelNextRequest = true;
      self.manager.showScreen("mainmenu");
    });
    this.meter = new Meter();
    this.marker = new Marker();
  }

  processInput(elapsedTime) {
    this.myKeyboard.update(elapsedTime);
  }

  update(elapsedTime) {
    this.marker.update(elapsedTime)
  }
  
  renderScore() {
    document.getElementById("currentScore").innerHTML = score;
  }

  render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    this.meter.render();
    this.marker.render();
    this.renderScore();
  }

  checkHandler(elapsedTime){
    if(this.meter.checkMarker(this.marker)){
      this.marker= new Marker();
    }
  }

  run() {
    let self = this;

    let lastTimeStamp = performance.now();
    GameState.cancelNextRequest = false;

    this.myKeyboard.register(" ", this.checkHandler )
    function gameLoop(time) {
      self.processInput(time - lastTimeStamp);
      self.update(time - lastTimeStamp);
      lastTimeStamp = time;
      self.render();
      if (!GameState.cancelNextRequest) {
        requestAnimationFrame(gameLoop);
      }
      else{
        context.font = '48px serif';
        context.fillText('Hello world', 10, 50)
        // self.manager.showScreen("mainmenu");
      }
    }
    requestAnimationFrame(gameLoop);
  }
}
