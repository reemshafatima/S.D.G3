var dragon,dragonImg
var fireball,fireballImg
var flag,flagImg
var gameover,gameoverImg
var spike,spikeImg
var prince,princeImg
var princess,princessImg
var rockwall,rockwallImg
var startarrow,startarrowImg
var youwin,youwinImg
var castle,castleImg

function  preload() {
dragonImg=loadImage("dragon.png")
fireballImg=loadImage("fire ball.png")
flagImg=loadImage("flag.png")
gameoverImg=loadImage("game over.png")
spikeImg=loadImage("Metal Spike.png")
princeImg=loadImage("prince.png")
princessImg=loadImage("princess.png")
rockwallImg=loadImage("rock wall.jpg")
StartArrowImg=loadImage("Start Arrow.png")
youWinImg=loadImage("youWin.png")
castleImg=loadImage("castle.png")
}

function setup() {
    var canvas=createCanvas(windowWidth,windowHeight);
 
  rockwall = createSprite(500,820,20,20);
  rockwall.addImage("rockwall",rockwallImg);

 // rockwall.velocityX = -4
  rockwall.scale=0.3;

prince=createSprite(150,500,20,20);
prince.addImage("prince",princeImg)

prince.scale=0.3;

}

function draw() {
 background(0)
 
 if (rockwall.x < 0){
    rockwall.x = rockwall.width/2;
  }


fill("white") 
text(mouseX+","+mouseY,mouseX,mouseY)
//spawnrockwall();



drawSprites();
}

// function spawnrockwall() {
//     if(frameCount%60===0){
//         var rockwall=createSprite(width,800,30,30);
//         rockwall.addImage(rockwallImg);
//         rockwall.scale=0.4;
//         rockwall.velocityX=-4;

//         rockwall.lifetime = 2000;
//     }
// }









