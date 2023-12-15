function player() {
    ball = new Sprite(950, 300)
	ball.diameter = 50;
	ball.color = "black";
    //ball.bounciness = 0.8;
	ball.drag = 10;
	ball.mass = 100;
	ball.rotationLock = true;
}
function mycontroller() {
    if (kb.presses('space')) {
        ball.vel.y = -70;
    }
	if ((kb.pressing('a') & kb.pressing('d')) || (kb.pressing(RIGHT_ARROW) & kb.pressing(LEFT_ARROW))) { 
        ball.vel.x = 0;
    }else if ((kb.pressing('d') & !kb.pressing('a')) || (kb.pressing(RIGHT_ARROW) & !kb.pressing(LEFT_ARROW))) {
        ball.vel.x = 10;
    }else if ((kb.pressing('a') & !kb.pressing('d')) || (kb.pressing(LEFT_ARROW) & !kb.pressing(RIGHT_ARROW))) {
        ball.vel.x = -10;
    }
	
}
function cam() {
	camera.x = ball.x;
	camera.y = ball.y;
	if ( camera.y > 550) {
		camera.y = 550;
	}
}