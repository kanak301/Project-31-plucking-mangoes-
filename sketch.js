const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var canvas;

function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;

  Engine.run(engine);

  ground = new Ground(600,height,1200,20);

   createSprite(400, 200, 50, 50);

   
}

function draw() {
  rectMode(CENTER);
  background(0);  

  Engine.update(engine);

  ground.display();

  drawSprites();
}