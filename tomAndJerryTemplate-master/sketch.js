var jerry,tom

var jerryImage

var tomImage

var gardenImage

var jerryMoving

var tomMoving

var jerryStop

var tomStop


function preload() {
    //load the images here
    jerryImage = loadImage("images/jerryTwo.png")

    jerryMoving = loadImage("images/jerryThree.png")

    tomMoving = loadImage("images/tomTwo.png")

    tomImage = loadImage("images/tomFour.png")

    gardenImage = loadImage("images/garden.png")

    jerryStop = loadImage("images/jerryOne.png")

    tomStop = loadImage("images/tomFour.png")

}

function setup(){
    createCanvas(1000,800);

    jerry = createSprite (300,600)
    jerry.addImage("jerry",jerryImage)
    jerry.addAnimation("moving",jerryMoving)
    jerry.addAnimation("stop",jerryStop)

    jerry.scale = 0.1
    jerry.setCollider("circle",0,0,655)

    tom = createSprite (800,600)
    tom.addImage("tom",tomImage)
    tom.addAnimation ("moving",tomMoving)
    tom.addAnimation("stop",tomStop)
    tom.scale = 0.1
    tom.setCollider("circle",0,0,370)

    //create tom and jerry sprites here

}

function draw() {

    background(gardenImage);
    
    //Write condition here to evalute if tom and jerry collide

    keyPressed();

    if(jerry.isTouching(tom)){
        tom.velocityX = 0
        jerry.velocityX = 0

        jerry.changeAnimation("stop",jerryStop)
        
        
        tom.changeAnimation("stop",tomStop)

    }


    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
 if (keyCode === LEFT_ARROW){
    tom.velocityX = -5

    tom.changeAnimation ("moving",tomMoving)

    jerry.velocityX = 5
    
    jerry.changeAnimation("moving",jerryMoving)
 }

}
