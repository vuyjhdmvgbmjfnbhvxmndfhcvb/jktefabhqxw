
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 888);

	ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
	paper = new Paper(7,5,55)
	
	ground = new Ground(width,height,2000,15);
	ground2 = new Ground(width/1.5,height,10,200);
	ground3 = new Ground(width/2,height,10,200);
	ground4 = new Ground(width,height,10,2500);
	ground5 = new Ground(width/170,height,10,2500);
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
 
ground.display();
ground2.display();
ground3.display();
ground4.display();
ground5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-500})

	}
}


