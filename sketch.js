const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg

function preload() {
  backgroundImg = loadImage("sprites/bg.png");
  dayNight();
}
function setup() {
 var canvas =  createCanvas(900,600);
 engine = Engine.create();
 world = engine.world;
//blue
box1 = new Box(350,200,30,35)
box2 = new Box(380,200,30,35)
box3 = new Box(320,200,30,35)
box4 = new Box(290,200,30,35)
box5 = new Box(410,200,30,35)
box6 = new Box(440,200,30,35)
box7 = new Box(260,200,30,35)
//blue
box8 = new Box(600,250,30,35)
box9=new Box(630,250,30,35)
box10=new Box(570,250,30,35)
box11=new Box(540,250,30,35)
box12=new Box(660,250,30,35)
//green
b1=new B1(600,220,30,35)
b2=new B1(630,220,30,35)
b3=new B1(570,220,30,35)
e1=new B1(350,100,30,35)
e2=new B1(380,100,30,35)
e3=new B1(320,100,30,35)

//pink
b4=new B2(350,160,30,35)
b5=new B2(380,160,30,35)
b6=new B2(410,160,30,35)
b7=new B2(320,160,30,35)
b8=new B2(290,160,30,35)
b9=new B2(600,100,30,35)
//no
b10=new B3(350,60,30,35)

ground=new Ground(450,585,900,10)
g1=new Ground(350,400,250,10)
g2=new Ground(600,285,250,10)
stone = new Bird(200,250,30,30);

slingshot = new SlingShot(stone.body,{x:100, y:230});
}

function draw() {
  background("backgroundImg");  
Engine.update(engine);

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();

box11.display();

box12.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
e1.display();
e2.display();
e3.display();
stone.display();
slingshot.display();

ground.display();
g1.display();
g2.display()
fill("red")
box10.display();
drawSprites();

}


function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
if(keyCode===32)
slingshot.attach(this.stone)
}
function keyPressed(){
  if(keyCode === 32){
     // slingshot.attach(bird.body);
  }
}


async function dayNight(){

  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
  var responseJSON=await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13)
  if(hour>=06 && hour<=19){
  bg="sprites/bg.png"


  }else{
bg="sprites/bg2.jpg"

  }
backgroundImg=loadImage(bg)
}