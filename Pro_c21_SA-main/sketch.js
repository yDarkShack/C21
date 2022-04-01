const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var right_btn
var up_btn
function hForce(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05, y:0})
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:0.05})
}

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 right_btn = createImg("right.png")
 right_btn.position(100,100)
 right_btn.size(50,50) 
 right_btn.mouseClicked(hForce)
 up_btn = createImg("up.png")
 up_btn.position(300,300)
 up_btn.size(50,50)
 up_btn.mouseClicked(vForce) 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  var options = {
    restitution: 0.5
  }
  ball = Bodies.circle(200,200,30,options)
  World.add(world, ball)
  
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 30)
}

