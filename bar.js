const Bar = function(x, y, dx, dy, move){
    this.x = x || 150;
    this.y = y || 500;
    this.dx = dx || 200;
    this.dy = dy || 50;
    this.move = move || 50;
    this.drawBar = function(){
        ctx.fillStyle = "#000";
        ctx.fillRect(this.x, this.y, this.dx, this.dy);
    }
};