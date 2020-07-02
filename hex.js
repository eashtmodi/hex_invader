class Hex {
    constructor(x,y,width,height) {
      var options = {
          isStatic:false,
          density:1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("#FFAA33");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
