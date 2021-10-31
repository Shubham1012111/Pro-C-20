var bgImg;
var cat,cat1Img, cat2Img, cat3Img, cat4Img;
var mouse,mouse1Img, mouse2Img, mouse3Img, mouse4Img;

function preload() {
    //loading the images 
    bgImg = loadImage("images/garden.png");
    cat1Img = loadAnimation("images/cat1.png");
    mouse1Img = loadAnimation("images/mouse1.png");
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    cat3Img = loadAnimation("images/cat4.png");
    mouse3Img = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870, 600);
    cat.addAnimation("catSitting",cat1Img);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseEating",mouse1Img);    
    mouse.scale = 0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImage",cat3Img);
        cat.x = 280;
        cat.scale = 0.2;
        cat.changeAnimation("catLastImage");

        mouse.addAnimation("mouseLastImage",mouse3Img);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouseLastImage");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catrunning",cat2Img);
        cat.changeAnimation("catrunning");

        mouse.addAnimation("mouseTeasing",mouse2Img);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
       
    }


}
