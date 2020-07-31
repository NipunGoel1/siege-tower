
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var hexagon;
var sling;

function setup() {
  createCanvas(1600,400);
  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(805,380,330,40);
  box1 = new Box(695,330,50,50);
  box2 = new Box(750,330,50,50);
  box3 = new Box(805,330,50,50);
  box4 = new Box(860,330,50,50);
  box5 = new Box(915,330,50,50);
  box6 = new Box(722,275,50,50);
  box7 = new Box(777,275,50,50);
  box8 = new Box(832,275,50,50);
  box9 = new Box(887,275,50,50);
  box10 = new Box(750,220,50,50);
  box11 = new Box(805,220,50,50);
  box12 = new Box(860,220,50,50);
  box13 = new Box(777,165,50,50);
  box14 = new Box(832,165,50,50);
  box15 = new Box(805,110,50,50);
  hexagon = new Hexagon(300,200,100,100);
 sling = new SlingShot(hexagon.body,{x:300,y:150})
  
}

function draw() {
  background(255);  
  Engine.update(engine);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  hexagon.display();
  sling.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
sling.fly();
}
function keyPressed(){
  if(keyCode === "UP_ARROW"){
   //sling.attach(hexagon.body)
  }
}