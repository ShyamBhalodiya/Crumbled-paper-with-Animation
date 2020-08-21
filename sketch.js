
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	dustbin = loadImage("Dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new body(400, 700, width, 20);
	ball = new paper();
	wall1 = new body(530, 600, 20, 180);
	wall2 = new body(700, 600, 20, 180);
	wall3 = new body(610, 680, 180, 20);
	wall3.image = loadImage("Dustbin.png");
	keyPressed();
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(225);
	ground.display(0, 0, 225);
	wall1.display(225, 225, 225);
	wall2.display(225, 225, 225);
	wall3.display(225, 225, 225);
	imageMode(CENTER);
	image(wall3.image, 610, 590, 200, 200);
	ball.display();
	drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(ball.body, ball.body.position, { x: 300, y: -400 });
	}
}


