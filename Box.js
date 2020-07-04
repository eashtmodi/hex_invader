class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visible=255;
  }
  display(){
    console.log(this.body.speed);
    
    if(this.body.speed<6){
      super.display();
    }
    else{
      push();
      World.remove(world,this.body);
      this.visible=this.visible-10;
      tint(255,this.visible);
      pop();
    }

  }
}
