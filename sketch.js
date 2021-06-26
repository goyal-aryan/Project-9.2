var shipImg;
var seaImg;
var ship;
var sea;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation ("ship1.png","ship2.png");

}

function setup(){
  createCanvas(600,600);
  edges = createEdgeSprites();
  
  sea = createSprite (200,200);
  sea.addImage("sea",seaImg);
  sea.velocityX = -5;
  
  ship = createSprite (200,200);
  ship.addAnimation ("sailing", shipImg);
  ship.scale = 0.5;

  
}

function draw() {
  background("blue");
  
  if (sea.x<0){
    sea.x = sea.width/2;
  }
  
  drawSprites();
 
}