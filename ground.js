class Ground{
    constructor(x,y,width,height){
    var kevin={
        'isStatic':true,
    'restitution':0.8,
    'friction':0.3,
    'densitu':1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,kevin)
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    
    }
    display(){
    //var pos = this.body.position;
    push()
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    pop();
    }
    
    
    }