var ball;

function setup() {
	new Canvas(windowWidth, windowHeight);
	player();
	design();
	world.gravity.y = 150;
}

function draw() {
	background('lightblue');
	//noStroke(); // macht die außen linien weg
	mycontroller();
	cam();
	points();

	menu.x = ball.x + windowWidth/2-70;
	menu.y = camera.y - windowHeight/2+70
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	camera.x = ball.x;
	camera.y = ball.y;
}
