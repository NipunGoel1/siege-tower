class Box {
  constructor(x,y,width,height){
    var options = { 
      isStatic:false,
      density:0.01,
      restitution:0.04
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.r = random(0,255);
    this.ra = random(0,255);
    this.ran = random(0,255);
    
    World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    rectMode(CENTER);
    fill(this.r,this.ra,this.ran);
    rect(0,0,this.width,this.height);
    pop();
  }
  }


