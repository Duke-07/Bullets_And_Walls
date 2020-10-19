var thickness, wall;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
 
  speed = random(223,321);

  weight = random(30,52)
  bullet = createSprite(50,200,20,10);
  bullet.shapeColor = (255,255,255);
  thickness=random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80) ;
  bullet.velocityX = speed;
  wall.setCollider("rectangle", 100,0,thickness+200, height);
}

function draw() {
  background(200,200,200);  
  
  if(wall.x-bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.collide(wall);
    bullet.velocityX=0;
    var damage = 0.5* weight * speed* speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }
    
    if(damage<=10)
    {
      wall.shapeColor = color(0,255,0); 
    }
    
  
  }
  drawSprites();


}