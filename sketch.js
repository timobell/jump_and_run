var ball;
var platforms;
var menu;
var boden;
var level1;
var level1s;
var lol = false;
var time = 0;

function setup() {
	new Canvas(windowWidth, windowHeight);
	player();
	design();
	level1();
	world.gravity.y = 150;
}

function draw() {
	background('lightblue');
	//noStroke(); // macht die außen linien weg
	mycontroller();
	cam();
	points();
	youdied();
	if (ball.vel.x > 0 || ball.vel.y < 0) {
		lol = true;
	}
	if (lol = true) {     //hier bin ich dran
		time +=1;
	}
	lol = false;
	console.log('time');
	menu.x = ball.x + windowWidth/2-70;
	menu.y = camera.y - windowHeight/2+70
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	camera.x = ball.x;
	camera.y = ball.y;
}
