const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

var score=0;

var bg="white";
var tcolor="black";

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(150, 305, 300, 170);
    platform2= new Ground(500, 250, 200, 10);
    platform3= new Ground(800, 300, 200, 10);


    box1 = new Box(500,200,50,50);
    box2 = new Box(550,200,50,50);
    box3 = new Box(450,200,50,50);
    box4 = new Box(525,150,50,50);
    box5 = new Box(475,150,50,50);
    box6 = new Box(500,100,50,50);

    box7 = new Box(800,250,50,50);
    box8 = new Box(850,250,50,50);
    box9 = new Box(750,250,50,50);
    box10 =new Box(825,150,50,50);
    box11= new Box(775,150,50,50);
    box12= new Box(800,100,50,50);

    hex= new Hex(100,100,75,75);

    
    slingshot = new SlingShot(hex.body,{x:200, y:50});
}

function draw(){
    push();
    getBackgroundImg();
    background(bg);
    pop();
    Engine.update(engine);
    strokeWeight(4);
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();



    platform1.display();
    platform2.display();
    platform3.display();
    
    hex.display();

    slingshot.display();  
    
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();

    push();
    fill(tcolor);
    text("SCORE="+score,50,60);
    pop();
}

function mouseDragged(){
    Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(hex.body);
    }
}

async function getBackgroundImg(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON= await response.json();
    var datetime= responseJSON.datetime;
    var hour=datetime.slice(11,13);
    if(hour>06 && hour<19){
        bg="white";
        tcolor="black";
    } 
    else{
        bg="black";
        tcolor="white";
    }
}