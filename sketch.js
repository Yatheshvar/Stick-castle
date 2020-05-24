const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var pillar1;
var pillar2;
var pillar3;
var pillar4;
var pillar5;
var pillar6;
var pillar7;


function setup() {
  engine = Engine.create();
    world = engine.world;

  var canvas=createCanvas(1200,800);
  pillar1 = new Pillar(650,200,50,400);
  pillar2 = new Pillar(648,250,50,600);
  pillar3 = new Pillar(650, 300,50,850);
  pillar4 = new Pillar(650, 350,50,1000);
  pillar5 = new Pillar(650, 400,50,770);
  pillar6 = new Pillar(650, 450,50,650);
  //pillar7 = new Pillar(650, 500,50,400);

}

function draw() {
  background("yellow");  
  Engine.update(engine);
  pillar1 .display();
  pillar2.display();
  pillar3.display();
  pillar4 .display();
  pillar5.display();
  pillar6.display();
  pillar7.display();
  drawSprites();
}