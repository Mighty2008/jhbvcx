class B3{
    constructor(x,y,width,height){
    var kevin={
    'restitution':0.8,
    'friction':0.3,
    'densitu':1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,kevin)
    this.width=width;
    this.height=height;
    //this.trajectory =[];
    //this.image=loadImage("images/WalkingFrame/walking_1.png")
    World.add(world,this.body)
    
    }
    display(){
    //var pos = this.body.position;
    push()
    //translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    //image(this.image,0,0,this.width,this.height);
   
    

    pop();
    }
    
    
    }
     