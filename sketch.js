var ball;

function setup() {
	new Canvas(windowWidth, windowHeight);
	player();
	design();
	world.gravity.y = 150;
}

function draw() {
	background('gray');
	mycontroller();
	cam();
	lol.x = ball.x + windowWidth/2-70;
	lol.y = camera.y - windowHeight/2+70
}

// Das wird cool
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	camera.x = ball.x;
	camera.y = ball.y;
}
