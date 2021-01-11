var wall,Thickness,bullet;

var thickness,speed,weight

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,20);
  
  wall=createSprite(1200,200,thickness,height/2); 
  wall.shapeColor="White";

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background("black"); 
  
  drawSprites();
  }
  function hascollided(bullet,wall){
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    if (bulletRightEdge>=wallLeftEdge) {
      return true 
    }
    return false;
  } 


if (hascollided(bullet1,wall1)) {
  bullet1.VelocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>10) {
    wall1.shapeColor=color(255,0,0);
  }
  
  if (damage<10) {
    wall1.shapeColor=color(0,255,0);
  }
}










  
  
