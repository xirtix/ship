
function preload(){
  seaImg=loadImage("sea.png");
  shipImg1=loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png"); 
  }

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 sprtiteName.addImage(seaImg);}
 if(sea.x < 0){
  sea.x=sea.width/2;
}