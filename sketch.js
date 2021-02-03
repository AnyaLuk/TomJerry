var garden, gardenImage
var cat, catFirst, catRunning, catLast
var mouse, mouseFirst, mouseTeasing, mouseLast

function preload() {
    //load the images here
    gardenImage = loadImage ("garden.png")
    catFirst = loadImage ("cat1.png")
    catRunning =loadAnimation ("cat2.png","cat3.png")
    catLast = loadImage ("cat4.png")

    mouseFirst = loadImage ("mouse1.png")
    mouseTeasing =loadAnimation ("mouse2.png","mouse3.png")
    mouseLast = loadImage ("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500,400,1000,800)
    garden.addImage(gardenImage)
    //create tom and jerry sprites here
    cat=createSprite(880,650,60,40)
    cat.addImage(catFirst)
    cat.scale= 0.15

    mouse=createSprite(200,650,60,40)
    mouse.addImage(mouseFirst)
    mouse.scale= 0.15
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x<(cat.width-mouse.width)/2) {
        cat.velocityX = 0
        cat.x=300
        cat.addImage("catLast",catLast)
        cat.changeImage("catLast",catLast)
        

        mouse.addImage("mouseLast",mouseLast)
        mouse.changeImage("mouseLast",mouseLast)
        
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW) {
        cat.velocityX = -5
        cat.addAnimation("catRunning", catRunning)
        cat.changeAnimation("catRunning")

        mouse.addAnimation("mouseTeasing", mouseTeasing)
        mouse.changeAnimation("mouseTeasing")
    }

}
