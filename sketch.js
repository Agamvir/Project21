const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground;
var right;
var left;
var ball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground = new Ground(windowWidth/2,700,windowWidth,50);
  left = new Ground(900,630,10,200);
  right = new Ground(1100,630,10,200);

  var ball_options = {
    isStatic:false,
    restitution: 0.3,
    friction:0,
    density:1.2
  };
  
  ball = Matter.Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);
}


function draw() 
{
  background(51);

  ellipse(ball.position.x, ball.position.y, 20);

  Engine.update(engine);
  
  ground.show();
  left.show();
  right.show();
}

function keyPressed() {
 
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:60, y:-100});
  }
 
}