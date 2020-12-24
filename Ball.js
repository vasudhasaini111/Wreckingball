class Ball {
  constructor(x, y,width,height) {
    var options = { 
      restitution:1,
      density: 1,
    }

    this.body = Bodies.rectangle(x, y,width,height, options);
    this.width=width;
    this.height=height;
    this.image=loadImage("METALBALL.png")
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
 
    //fill("purple");
    //ellipseMode(CENTER);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    //ellipse(this.body.position.x,this.body.position.y,80,80);
    pop();
  }
}



     
          