class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
     
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //image(this.sling1,200,20)
       // image(this.sling2,170,20)
        //image(this.sling)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
           // if(pointA.x<800){


            
            strokeWeight(8);
            stroke(48,22,8)
          //  image(this.sling,pointA.x-30,pointA.y-10,15,30)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
            
              
            
            
            pop();
    //    }
    }}
     }
     //else{strokeWeight(3);
       // stroke(48,22,8);

        //image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        //line(pointA.x-30, pointA.y, pointB.x-3, pointB.y);

