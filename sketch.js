
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, paper, groundObject, world;

function preload() {
	paper = loadImage("paper.png");
	dustbin = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj = new Box(1200, 650);
	paperObject = new Crumbledpaper(200, 450, 70);
	groundObject = new Ground(width / 2, 670, width, 20);
	//Create a Ground


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	});

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background("white");

	paperObject.display();
	groundObject.display();
    dustbinObj.display();




}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body, paperObject.body.position, { x: 85, y: -85 });

	}
} 
