var canvas;
var music;
var fixedrect1, fixedrect2 , fixedrect3, fixedrect4;
var movingbox , edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     fixedrect1 = createSprite(300,600,200,100);
     fixedrect1.shapeColor = "purple";
     fixedrect1.debug = false;

     fixedrect2 = createSprite(100,600,200,100);
     fixedrect2.shapeColor = "blue";
     fixedrect2.debug = false;

     fixedrect3 = createSprite(500,600,200,100);
     fixedrect3.shapeColor = "green";
     fixedrect3.debug = false;

     fixedrect4 = createSprite(700,600,200,100);
     fixedrect4.shapeColor = "red";
     fixedrect4.debug = false;

     movingbox = createSprite(random(20,750),100,50,50);
     movingbox.shapeColor = "white";
     movingbox.debug = false;
     movingbox.velocityX = 6;
     movingbox.velocityY = 6;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    music.play();
   
    //create edgeSprite
    edges = createEdgeSprites();
    movingbox.bounceOff(edges);
    //add condition to check if box touching surface and make it box
  
    if(fixedrect1.isTouching(movingbox) && movingbox.bounceOff(fixedrect1)){
        movingbox.shapeColor = "purple";
        movingbox.velocityX = 0;
        movingbox.velocityY = 0;
        music.stop()  
       
    }
    

    if(fixedrect2.isTouching(movingbox) && movingbox.bounceOff(fixedrect2)){
        movingbox.shapeColor = "blue";
        movingbox.velocityX = 0;
        movingbox.velocityY = 0;
        music.stop()
       
    }
  

    if(fixedrect3.isTouching(movingbox) && movingbox.bounceOff(fixedrect3)){
        movingbox.shapeColor = "green";
        movingbox.velocityX = 0;
        movingbox.velocityY = 0;
        music.stop() 
       
    }

  

    if(fixedrect4.isTouching(movingbox)&& movingbox.bounceOff(fixedrect4)){
       movingbox.shapeColor = "red";
       movingbox.velocityX = 0;
       movingbox.velocityY = 0;
       music.stop()
      
    }
     
   
     drawSprites();
  
}
     