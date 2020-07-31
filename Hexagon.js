class Hexagon {
    constructor(x,y,width,height){
      var options = { 
        density :3,
        restitution:0.5,
        friction:0.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/hexagon.png")
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
    
      imageMode(CENTER)
     image(this.image,pos.x,pos.y,this.width,this.height);
     
    }
    }
  
  
  