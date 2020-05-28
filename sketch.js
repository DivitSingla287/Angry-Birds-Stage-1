const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig,pig1;
var log,log1,log2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,350,50,50);
    box2 = new Box(1100,350,50,50);
    box3 = new Box(900,300,50,50);
    box4 = new Box(1100,300,50,50);
    box5 = new Box(1000,200,50,50);
    ground = new Ground(800,height,1200,20)
    pig = new Pig(1000,350);
    pig1 = new Pig(1000,300);
    log = new Log(1000,300,250,PI/2);
    log1 = new Log(1000,200,250,PI/2);
    log2 = new Log(970,100,100,PI/7);
    log3 = new Log(1020,100,100,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig1.display();
    log.display();
    log1.display();
    log2.display();
    log3.display();
}