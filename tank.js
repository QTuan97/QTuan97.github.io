
const Tank = function (x, y, xV, yV, size) {
    this.x = x || 50;
    this.y = y || 50;
    this.xVelocity = xV || 0;
    this.yVelocity = yV || 0;
    this.size = size || 10;
    this.nextState = function () {
        tank.change_derection();
        return new Tank(this.x + this.xVelocity, this.y + this.yVelocity, this.xVelocity, this.yVelocity, this.size);

    };
    this.setVelocity = function (xV, yV) {
        this.xVelocity = xV;
        this.yVelocity = yV;
    }

    this.change_derection = function(){
        if (this.x > canvas.width - this.size || this.x < this.size){
            this.xVelocity = -this.xVelocity;

        }
        if (this.y > canvas.height - this.size || this.y < this.size ){
            this.yVelocity = -this.yVelocity;
        }
        if (this.y + this.size > Bar01.y && this.x > Bar01.x && this.x < Bar01.x + Bar01.dx){
            score += 100;
            this.yVelocity = -this.yVelocity;
        }
    }

    this.GameOver = function(){
        if(tank.y + tank.size/2 > Bar01.y){
           /* ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.log("Game Over");
            console.log(this.y, Bar01.y);*/
           console.log(tank.x);
           alert("Game Over");
           alert("Your highest score is: " + score);
           alert("Press F5 to restart!");
           return false;

        }
        return true;
    }
};
