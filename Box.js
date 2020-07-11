class Box  {
  constructor(x, y, width, height){
    var options={
      'restitution':0.8,
      'friction':1.0,
      'density':0.5
    }
    this.body=Bodies.rectangle(x,y,width,height);
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
    this.visible=255;
  }
  display(){
    if(this.body.speed<6){
      push();
      stroke("white");
      strokeWeight(1);
      rectMode(CENTER);
      fill(this.color);
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
    }
    else{
      push();
      World.remove(world,this.body);
      this.visible=this.visible-10;
      tint(255,this.visible);
      pop();
    }

  }

  score(){
    if(this.visible<0 && this.visible>-1500){
      score++;
    }
  }
  
}
