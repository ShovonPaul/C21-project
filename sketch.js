
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload(){

}

function setup() {
	createCanvas(800,450);
	engine = Engine.create();
	world = engine.world;
	
	var balls_options={
		isStatic:false,
		restition:0.3,
		friction:0,
		density:0.5,
	}

	//Create the Bodies Here.
	
	ball = Bodies.circle(200,100,20,balls_options);
	World.add(world,ball);

	groundObj = new Ground(width/2,430,width,20);
	leftSide = new Ground(400,370,20,100);
	rightSide = new Ground(600,370,20,100);

	Engine.run(engine);	
	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  
  background(0);

  

  groundObj.display()
  leftSide.display()
  rightSide.display()
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites()
}
function keyPressed(){
  if(keyCode === UP_ARROW){
	// THE CODE THROUGH WHICH WE CAN APPLY FORCE TO THE BODY
		Matter.Body.applyForce(ball,{x:0,y:0},{x:2,y:-2});
}

}
