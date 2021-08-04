
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var base,ball,right_b,left_b,roof,right,left;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_o = {
		isStatic: false,
		restitution:-999,
		frictionAir:0.04,
		density:1.2
		
	}

	//Create the Bodies Here.
	base = new Block(400,450,800,10);
	roof = new Block(400,0,800,20);
	right = new Block(800,350,20,700);
	left = new Block(0,350,20,700);
	
	right_b = new Block(500,395,10,100);
	left_b = new Block(650,395,10,100);


	ball = Bodies.circle(100,50,15.5,ball_o)
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("BLACK");
  
  base.show();
  right_b.show();
  left_b.show();

  //left.show();

  Force();

  

  Engine.update(engine)
  drawSprites();

  ellipse(ball.position.x,ball.position.y,30)
 
}

function Force() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:-1.5});
	}

	if(keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0});
	}
}
