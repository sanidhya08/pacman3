var Ghost1Img,Ghost2Img,Ghost3Img,PacmanImg; 
var ghost1,ghost2,ghost3,pacman,ghostGroup;
var coinGroup; 
var maze;
var power1,power2,power3,power4, powerImg;
var r;
var edges;
var score = 0;
var life = 3
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var powerpallet;

function preload(){
  Ghost1Img=loadImage("Images/ghost1.png");
  Ghost2Img=loadImage("Images/ghost2.png");
  Ghost3Img=loadImage("Images/ghost3.png");
  PacmanImg=loadImage("Images/pac2.png ");
  coinImg=loadImage("Images/coin1.png");
  powerImg=loadImage("Images/smile.png");
}



function setup() {
  createCanvas(500,600);
  maze=createGroup();
  ghostGroup=createGroup();
  powerpallet=createGroup();
  edges=createEdgeSprites();
  maze.add(createSprite(40,90,8,150));
  maze.add(createSprite(247,20,420,10));
  maze.add(createSprite(453,90,8,150));
  maze.add(createSprite(246,60,8,75));
  maze.add(createSprite(86,170,100,10));
  maze.add(createSprite(131,215,10,80));
  maze.add(createSprite(86,260,100,10));
  maze.add(createSprite(407,170,100,10));
  maze.add(createSprite(357,210,10,90));
  maze.add(createSprite(402,260,100,10));
  maze.add(createSprite(86,303,100,10));
  maze.add(createSprite(134,343,10,90));
  maze.add(createSprite(86.5,388,105,10));
  maze.add(createSprite(38,468,8,170));
  maze.add(createSprite(241.5,555,415,10));
  maze.add(createSprite(450,479,8,163));
  maze.add(createSprite(401.5,397,105,10));
  maze.add(createSprite(350,357,10,90));
  maze.add(createSprite(400,314,110,10));
  maze.add(createSprite(164,201,8,130));
  maze.add(createSprite(190,200,50,10));
  maze.add(createSprite(323,201,8,130));
  maze.add(createSprite(297,201,50,10));
  maze.add(createSprite(244,183,8,45));
  maze.add(createSprite(320,355,10,95));
  maze.add(createSprite(164,348,10,95));
  
  maze.add(createSprite(128,426,45,8));
  
  maze.add(createSprite(147,445.5,8,45));
  
  maze.add(createSprite(57,472,45,8));
  
  maze.add(createSprite(75.8 ,483,8,25));
  
  maze.add(createSprite(57,495,45,8));
  
  maze.add(createSprite(190,491,8,50));
  
  maze.add(createSprite(160,520,110,10));
  
  maze.add(createSprite(198,425,35,8));
  
  maze.add(createSprite(301,425,35,8));
 
  maze.add(createSprite(387,425,45,8));
  
  maze.add(createSprite(366.5,444,8,45));
  
  maze.add(createSprite(425,480,45,8));
 
  maze.add(createSprite(406 ,489,8,25));
 
  maze.add(createSprite(426,498,45,8));
 
  maze.add(createSprite(330,491,8,50));
  
  maze.add(createSprite(345,520,110,10));
  
  maze.add(createSprite(254,502,8,45));
  
 
  maze.add(createSprite(100,60,60,25));

  maze.add(createSprite(190,60,60,25));
 
  maze.add(createSprite(350,110,100,20));
  
  maze.add(createSprite(320,60,60,25));

  maze.add(createSprite(140,110,100,20));
  
  maze.add(createSprite(245,250,100,20));
 
  maze.add(createSprite(245,370,100,20));

  maze.setColorEach(rgb(72,146,255));

  power1=createSprite(64,122,15,15);
  power1.addImage(powerImg);
  power1.scale=0.05;
  powerpallet.add(power1)
  power2=createSprite(428,100,15,15);
  power2.addImage(powerImg);
  power2.scale=0.05;
  powerpallet.add(power2)
  power3=createSprite(60,522,15,15);
  power3.addImage(powerImg);
  power3.scale=0.05;
  powerpallet.add(power3)
  power4=createSprite(63,420,15,15);
  power4.addImage(powerImg);
  power4.scale=0.05;
  powerpallet.add(power4)
  
  
  

  
  ghost1=createSprite(180,210,20,20)
  ghost1.addImage(Ghost1Img);
  ghost1.scale=0.08;
  ghost1.velocityY=5;
  ghost1.velocityX=0;
  ghostGroup.add(ghost1)
  ghost2=createSprite(230,220,20,20)
  ghost2.addImage(Ghost2Img);
  ghost2.scale=0.08;
  ghost2.velocityY=5;
  ghost2.velocityX=0;
  ghostGroup.add(ghost2)
  ghost3=createSprite(260,220,20,20)
  ghost3.addImage(Ghost3Img);
  ghost3.scale=0.08;
  ghost3.velocityY=5;
  ghost3.velocityX=0;
  ghostGroup.add(ghost3)
  pacman=createSprite(60,35,20,20)
  pacman.addImage(PacmanImg);
  pacman.scale=0.03;
  
  
  coinGroup=createGroup();
  centre=createSprite(246,290,80,35)
  centre.shapeColor="red";
  centre1=createSprite(400,210,50,50)
  centre1.shapeColor="black"
  centre2=createSprite(401,352,60,50)
  centre2.shapeColor="black"
  centre3=createSprite(84,341,90,60)
  centre3.shapeColor="black"
  centre4=createSprite(76,212,70,50)
  centre4.shapeColor="black"

  for(var i=100;i<=445;i+=25){
    for(var j=33;j<=565;j+=20){
      var coin=createSprite(i,j,5,5);
      coin.shapeColor="yellow";

      coin.addImage(coinImg);
     coin.scale=0.3;

     if(coin.overlap(centre)||
     coin.overlap(centre1)||
     coin.overlap(centre2)||
     coin.overlap(centre3)||
     coin.overlap(centre4)||
      coin.overlap(maze)||
      coin.overlap(ghost1)||
      coin.overlap(ghost2)||
      coin.overlap(ghost3)||
      coin.overlap(power1)||
      coin.overlap(power2)||
      coin.overlap(power3)||
      coin.overlap(power4)){
     coin.visible=false;
   }
   else{
     
     coinGroup.add(coin);
   }

     
  }
  }

   }


function draw() {
  background("black");  
 
   text(mouseX + " " + mouseY,233,347);
   
   drawSprites();

   textSize(25)
   text("Score :" +score,314,586)
  textSize(25)
  text("Life :" +life,152,586)
  

  if(gameState===PLAY){
      if(ghostGroup.isTouching(pacman)){
      life=life - 1;
    
    }
    if(life<=0){
      gameState=END;
    }
     if(powerpallet===0){
     ghostGroup.visible=false 
     }
    
  }
  else if(gameState===END )
   {
     text("GameOver",235,22)
    
    }
    

  
  pacMovement();
  coinCollection();
  ghostControls();
 powerCollection();
}

   
function pacMovement(){
  if(keyDown("up")){
    pacman.y-=3;
    pacman.rotation=-90;
  }

  
  if(keyDown("down")){
    pacman.y+=3;
    pacman.rotation=90;
  }

    
  if(keyDown("left")){
    pacman.x-=3;
    pacman.rotation=180;
  }
    
  if(keyDown("right")){
    pacman.x+=3;
    pacman.rotation=0;
  }
  pacman.bounceOff(maze);
  pacman.bounceOff(edges);
}


function coinCollection()
{
  for(var c=0;c<coinGroup.length;c++)
  {
    if(pacman.isTouching(coinGroup.get(c)))
    {
      coinGroup.get(c).destroy();
      score = score +1;
    }
  }
  
}

function ghostControls()
{
  ghost1.bounce(ghost2);
  ghost1.bounce(ghost3);
  ghost2.bounce(ghost3);
   r=Math.round(random(1,2));
  
  if(ghost1.velocityX === 0 && ghost1.collide(maze) )
  {
    if(r===1)
    {
     ghost1.velocityX=5;
     ghost1.velocityY=0;
    }
    else
    {
      ghost1.velocityX=-5
      ghost1.velocityY=0;
    }
    ghost1.velocityY=0;
  }
  
   if(ghost1.velocityY===0 && ghost1.collide(maze) )
  {
    if(r===1)
    {
     ghost1.velocityY=5;
     ghost1.velocityX=0;
    }
    else
    {
      ghost1.velocityY=-5;
      ghost1.velocityX=0;
    }
   ghost1.velocityX=0; 
  }
   
  if(ghost2.velocityX === 0 && ghost2.collide(maze) )
  {
    if(r===1)
    {
     ghost2.velocityX=5;
     ghost2.velocityY=0;
    }
    else
    {
      ghost2.velocityX=-5
      ghost2.velocityY=0;
    }
    ghost2.velocityY=0;
  }
  
   if(ghost2.velocityY===0 && ghost2.collide(maze) )
  {
    if(r===1)
    {
     ghost2.velocityY=5;
     ghost2.velocityX=0;
    }
    else
    {
      ghost2.velocityY=-5;
      ghost2.velocityX=0;
    }
   ghost2.velocityX=0; 
  }

   
  if(ghost3.velocityX === 0 && ghost3.collide(maze) )
  {
    if(r===1)
    {
     ghost3.velocityX=5;
     ghost3.velocityY=0;
    }
    else
    {
      ghost3.velocityX=-5;
      ghost3.velocityY=0;
    }
    ghost3.velocityY=0;
  }
  
   if(ghost3.velocityY===0 && ghost3.collide(maze) )
  {
    if(r===1)
    {
     ghost3.velocityY=5;
     ghost3.velocityX=0;
    }
    else
    {
      ghost3.velocityY=-5;
      ghost3.velocityX=0;
    }
   ghost3.velocityX=0; 

  }
  ghost1.bounceOff(maze);
   ghost2.bounceOff(maze);
   ghost3.bounceOff(maze);
   ghost1.bounceOff(edges);
   ghost2.bounceOff(edges);
   ghost3.bounceOff(edges);

}


function powerCollection(){
  if(pacman.isTouching(power1))
  {
    power1.destroy()
    score = score +10;
  }
  if(pacman.isTouching(power2))
  {
    power2.destroy()
    score = score +10;
  } 
  if(pacman.isTouching(power3))
  {
    power3.destroy()
    score = score +10;
  }
  if(pacman.isTouching(power4))
  {
    power4.destroy()
    score = score +10;
  }
}
