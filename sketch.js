var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 600, 50, 80);
  fixedRect.velocityY= -3
  fixedRect.shapeColor = "green";

  movingRect = createSprite(200,100,80,30);
  movingRect.velocityY= 3
  movingRect.shapeColor = "green";
  
}

function draw() {
  background("black");  
  
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
/*
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2
    &&fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "white";
    movingRect.shapeColor = "white";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";

  }
  */

 // bounceOff

 if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2){
  fixedRect.velocityX=fixedRect.velocityX*(-1)
  movingRect.velocityX=movingRect.velocityX*(-1)
  }


   if(movingRect.y- fixedRect.y <= movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.velocityY=fixedRect.velocityY*(-1)
    movingRect.velocityY=movingRect.velocityY*(-1)
    }









  drawSprites();
}
