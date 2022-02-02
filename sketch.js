var canvas;
var MESSI,NEYMAR_JR,FOOTBALL_FIELD
var FIELD,messiImage
var ball
var score=0
var JRscore=0 
var gameOverImg
var gameOver
var gameState = "PLAY"

function preload() {
  
  neymarImage = loadImage("new.png");
  FIELD = loadImage("FOOTBALL FIELD.png");
  messiImage = loadImage("video_image.png");
  ballImage=loadImage("ball.png");
  gameOverImg = loadImage("gameOver.png")

}




function setup() {
  createCanvas(windowWidth,windowHeight);
  FOOTBALL_FIELD = createSprite(width/2,height/2,width,height);
  FOOTBALL_FIELD.addImage(FIELD);
  FOOTBALL_FIELD.scale=2.5

  MESSI = createSprite(420,490,60,50)
  MESSI.addImage(messiImage);
  MESSI.scale=0.2

  NEYMAR_JR=createSprite(1530,500,60,50)
  NEYMAR_JR.addImage(neymarImage);
  NEYMAR_JR.scale=0.4

  ball=createSprite(960,480,100,100)
  ball.addImage(ballImage)
  ball.scale=0.1
  
  edges=createEdgeSprites()

  border1= createSprite(960,930,1400,5)
  border2=createSprite(955,30,1400,5)
  border3=createSprite(260,480,5,910)
  border4=createSprite(1660,480,5,900)

 gameOver=createSprite(950,470);
gameOver.addImage(gameOverImg);
gameOver.visible = false;

}


function draw() {
  background(255,255,255);  
  drawSprites();

  if(keyDown("RIGHT_ARROW")){
    MESSI.x=MESSI.x+10
  }
  if(keyDown("LEFT_ARROW")){
    MESSI.x=MESSI.x-10
  }
  if(keyDown("UP_ARROW")){
    MESSI.y=MESSI.y-10
  }
  if(keyDown("DOWN_ARROW")){
    MESSI.y=MESSI.y+10
  }

 if(MESSI.isTouching(ball)){
   ball.velocityX=5;
   ball.velocityY=4;
  
 }
 if(NEYMAR_JR.isTouching(ball)){
   ball.velocityX=-4
   NEYMAR_JR.x=1530
 }
 if(keyDown("d")){
 NEYMAR_JR.x=NEYMAR_JR.x+10
}
if(keyDown("a")){
  NEYMAR_JR.x=NEYMAR_JR.x-10
}
if(keyDown("w")){
  NEYMAR_JR.y=NEYMAR_JR.y-10
}
if(keyDown("s")){
 NEYMAR_JR.y=NEYMAR_JR.y+10
}

if(gameState === "PLAY"){
  gameOver.visible = false
}

else if(gameState === "END"){
  console.log("hey")
  gameOver.visible =true;
  ball.velocityX=0
  ball.velocityY=0
  ball.x=960
  ball.y=480

  MESSI.velocityX=0
  MESSI.velocityY=0
  MESSI.x=420
  MESSI.y=490

  NEYMAR_JR.velocityX=0
  NEYMAR_JR.velocityY=0
  NEYMAR_JR.x=1530
  NEYMAR_JR.y=500
}


 fill("red")
 textSize(40)
text("MESSI:"+score,700,200)
text(mouseX + "," +mouseY, mouseX+50,mouseY);
 ball.bounceOff(edges);
 MESSI.bounceOff(edges);
 NEYMAR_JR.bounceOff(edges);

if(ball.isTouching(border4)){
score=score+1
}

text("NEYMAR_JR:"+JRscore,1000,200)
if(ball.isTouching(border3)){
  JRscore=JRscore+1
}
 
if(score==2){
  gameState="END";
  
}
 if(JRscore==2){
   gameState="END";
 }



 ball.bounceOff(border1)
 ball.bounceOff(border2)
 ball.bounceOff(border3)
 ball.bounceOff(border4)
}






