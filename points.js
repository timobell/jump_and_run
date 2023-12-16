var entfernung = 950;
var punktzahl = 0;

function points() {
    if (ball.x > entfernung + 100) {
        entfernung += 100;
        punktzahl += 1;
    }
    fill(255,255,255);
	text(punktzahl , windowWidth/2, 50);
	textSize(60);
	textAlign(CENTER);
}