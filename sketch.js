const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var engine,world;
var ground;

function setup() 
{
  createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;
  
var option = {
  isStatic : true
}
ground = Bodies.rectangle(200,400,400,50,option);
World.add(world,ground);

console.log(ground);

/*box = Bodies.rectangle(300,50,60,60);
World.add(world,box); */

var option1 = 
{
   restitution : 1
}
ball = Bodies.circle(150,200,20,option1);
World.add(world,ball);
}

function draw() 
{
  background('lightgreen'); 
  Engine.update(engine);
  
  rectMode(CENTER);
  fill("brown");
   rect(ground.position.x,ground.position.y ,400,50);
  // rect(box.position.x,box.position.y,60,60);

   ellipseMode(RADIUS);
   fill("blue");
   ellipse(ball.position.x,ball.position.y,20,20);
}