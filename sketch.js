var astro

var bg 
var bgd
var brush
var gym
var gym2
var eat
var drink
var move
var sleep

function preload(){
  bg   = loadImage    ("iss.png");
  brush= loadImage    ("brush.png");
  gym  = loadAnimation("gym1.png","gym2.png");
  gym2 = loadAnimation("gym11.png","gym12.png");
  eat  = loadAnimation("eat1.png","eat2.png");
  drink= loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
  sleep= loadAnimation("sleep.png");
 
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  astro = createsprite(400,200,10,10);


  bgd   = createSprite(400,200,10,10);
  bgd.addImage(bg);

  drawSprites();
}

  function draw() {
  background(255,255,255);  
  drawSprites();
}