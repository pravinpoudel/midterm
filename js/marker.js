class Marker{
    constructor(){
        this.width = 15;
        this.height = 100;
        this.x = Math.floor(canvas.width/4);
        this.y = Math.floor(canvas.height/2.3);
        this.render = this.render.bind(this);
        this.cSpeed = canvas.width/2;
        this.direction = 1;
        this.update = this.update.bind(this);
    }


    update(timeStamp){
        this.x += this.direction * this.cSpeed * timeStamp * 0.001;
        if((this.x + this.width + 5)>= Math.floor(canvas.width*0.75) || this.x <= canvas.width*0.25){
            this.direction *= -1;
        }
    }

    render(){
        let self = this;
        context.strokeStyle = "#000000";
        context.lineWidth = 5;
        context.fillStyle = "yellow";
        context.fillRect(self.x, self.y, self.width, self.height);
        context.strokeRect(self.x, self.y, self.width, self.height);
    }

}