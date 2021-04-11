var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbin;
var paperball;
var trashCan1,trashCan2,trashCan3;

var launcher;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create a ground
	ground = Bodies.rectangle(800,690,1600,10,{isStatic:true});
	World.add(world,ground);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);

	paperBall = new Paper(300,500,70);

	trashCan1 = new Dustbin(1550,590,20,180);
	trashCan2 = new Dustbin(1400,670,200,20);
	trashCan3 = new Dustbin(1250,590,20,180);
	
	Engine.run(engine);

	launcher = new Launcher(paperBall.body,{x:300, y:250});
	  
}


function draw() {
	background(180);

	//draw ground using rect
	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,1600,20);

	trashCan2.display();
	paperBall.display();

}

function mouseReleased(){
    launcher.fly();
}

function mouseDragged(){
        Matter.Body.setPosition(paperBall.body, {x: mouseX , y: mouseY});
}

function keyPressed(){
	if(keyCode === 32){
	  launcher.attach(paperBall.body);
   }
}