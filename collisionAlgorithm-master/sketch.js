var fixedRect, movingRect;
var rect1;
var rect2;
var rect3;
var rect4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
  rect1 = createSprite(200, 200, 40, 40);
  rect1.shapeColor = "blue";

  rect2 = createSprite(200, 300, 40, 40);
  rect2.shapeColor = "pink";

  rect3 = createSprite(200, 400, 40, 40);
  rect3.shapeColor = "yellow";

  rect4 = createSprite(200, 500, 40, 40);
  rect4.shapeColor = "orange";


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(rectTouching(movingRect, rect2)){
    movingRect.shapeColor = "red";
    rect2.shapeColor= "red";
 }
  else{
    movingRect.shapeColor = "green";
    rect2.shapeColor = "pink";
  }

  if(rectTouching(movingRect, rect1)){
    movingRect.shapeColor = "red";
   rect1.shapeColor = "red";
 }
  else{
    movingRect.shapeColor = "green";
    rect1.shapeColor = "blue";
  }

  if(rectTouching(movingRect, rect3)){
    movingRect.shapeColor = "red";
   rect3.shapeColor = "red";
 }
  else{
    movingRect.shapeColor = "green";
    rect3.shapeColor = "yellow";
  }

  drawSprites();
}

