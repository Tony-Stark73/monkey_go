var monkey, monkey_running, mon, ground1, rock;
var banana, bananaImage, obstacle, og, ob,gos, obstacleImage, ground, iground, b1, ba,go,dead;
var FoodGroup, obstacleGroup
var score = 0;
const play = 1;
const end = 0;
var gamestate = play;

function preload() {

dead=loadAnimation("sprite_7-1.png")
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
go=loadImage("gameOver.png");

  
  iground = loadImage("ground2.png");
  rock = loadImage("obstacle-1.png");
  ba = loadImage("banana.png");
}



function setup() {
  createCanvas(600, 200);
  mon = createSprite(50, 160, 20, 50);
  mon.addAnimation("mon1", monkey_running);
  mon.addAnimation("d1",dead);
  mon.scale = 0.08;
  ground = createSprite(300, 193, 600, 20);
  ground.addImage(iground);
  og = new Group();
  bg = new Group();
  mon.setCollider("rectangle", 0, 0,mon.width, mon.height);
  mon.debug= true;
  
}


function draw() {
  background("white");
  gos=createSprite(250,100,0,0);
  gos.addImage(go);
  gos.visible=false;
  text("score:" + score, 400, 30);
ground1 = createSprite(200, 200, 400, 10);
  ground1.visible = false;
  mon.collide(ground1);
  
 
  if(gamestate==play){
  ground.velocityX = -5;
    score=score+Math.ceil(getFrameRate()/100);
    
  if (keyDown("space") && mon.y >= 100) {
    mon.velocityY = -11;
  }
    

 if(mon.isTouching(bg)){
   score=score+10;
 }
 
    
    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }
    if (og.isTouching(mon)) {
     gamestate=end;
    }
   

  obstacles();
  banana();
}
  else if(gamestate==end){
    ground.velocityX=0;
 og.setLifetimeEach(-1);
 mon.changeAnimation("d1",dead)
    gos.visible=true;
       mon.velocityY=0;
 ob.velocityX=0;
 b1.velocityX=0;
    bg.setLifetimeEach(-1);
  }

  mon.velocityY=mon.velocityY+0.8;
  
  drawSprites();
}

function obstacles() {
  if (frameCount % 90 === 0) {
    ob = createSprite(600, 183, 10, 40)
    ob.velocityX = -8;
    ob.addImage(rock);
    ob.scale = 0.25;

    ob.lifetime = 75;
    og.add(ob)
  }


}

function banana() {
  if (frameCount % 90 === 0) {
    b1 = createSprite(600, 80, 10, 50);
    b1.addImage(ba);
    b1.velocityX = -8;
    b1.scale = 0.1;
    b1.lifetime = 75;
    bg.add(b1);
  }

}