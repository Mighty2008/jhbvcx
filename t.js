class Bird  {
    constructor(x,y,width,height,angle){
     // super(x,y,50,50);
     var option={
  'isStatic':false,
  'restitution':0,
  'friction':0,
  'density':1.2
  
  
     }
     this.body = Bodies.rectangle(x, y, width, height, option);
     this.width =width;
     this.height = height;
     // this.image = loadImage("sprites/Plucking mangoes/stone.png");
      World.add(world,this.body);
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
     
      push();
 // translate(this.body.position.x,this.body.position.y);
  fill("red")
  rectMode(CENTER);
  rect(this.body.position.x,this.body.position.y,this.width,this.height)
  

  //rect(this.width,this.height);
  pop();
  
    }
  }
  