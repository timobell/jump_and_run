function player() {
    ball = new Sprite(500, 650);
	ball.diameter = 50;
	ball.color = "grey";
    //ball.bounciness = 0.8;
	ball.drag = 10;
	ball.mass = 100;
	ball.rotationLock = true;
    
}
function mycontroller() {
    if (kb.presses('space')) {
        for (var i=0; i<platforms.length; i++) {
            if (ball.colliding(platforms[i]) && ball.y<platforms[i].y - platforms[i].height/2) {
                ball.vel.y = -70;
            }
        }
        for (var i=0; i<level1s.length; i++) {
            if (ball.colliding(level1s[i]) && ball.y<level1s[i].y - level1s[i].height/2) {
                ball.vel.y = -70;
            }
        }
    }
	if ((kb.pressing('a') & kb.pressing('d')) || (kb.pressing(RIGHT_ARROW) & kb.pressing(LEFT_ARROW))) { 
        ball.vel.x = 0;
    } else if ((kb.pressing('d') & !kb.pressing('a')) || (kb.pressing(RIGHT_ARROW) & !kb.pressing(LEFT_ARROW))) {
        ball.vel.x = 10;
    } else if ((kb.pressing('a') & !kb.pressing('d')) || (kb.pressing(LEFT_ARROW) & !kb.pressing(RIGHT_ARROW))) {
        ball.vel.x = -10;
    }
}
function youdied() {
    if ( ball.y > 700) {
        ball.y = 650;
        ball.x = 500;
    }
}
function cam() {
	camera.x = ball.x;
	camera.y = ball.y;
	if ( camera.y > 550) {
		camera.y = 550;
	}
}