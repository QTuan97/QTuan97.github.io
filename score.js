let score = 0;
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    if (tank.y > Bar01.y && tank.y < Bar01.y + Bar01.dy && tank.x > Bar01.x && tank.x < Bar01.x + Bar01.dx) {
        score = score + 50;
    }
    ctx.fillText("Score: " + score, 8, 20);
}