class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0,
        'friction':1.2,
        'density':4.2
    }
    this.body = Bodies.rectangle(x, y, width, height,options);
    this.width = width*1.50;
    this.height = height;
    this.image = loadImage("hezagon_pic.png");
    World.add(world, this.body);
  }
  
  display(){
    var pos =this.body.position;
    imageMode(CENTER);
    fill(255);
    image(this.image,pos.x,pos.y,this.width,this.height);
    pop();
  }
};