
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Ground(400,80,700,50)


	bob1= new Bob(130,500,70);
	bob2=new Bob(270,500,70)
	bob3=new Bob(410,500,70)
	bob4=new Bob(550,500,70)
	bob5=new Bob(690,500,70)

	rope1= new Rope(bob1.body,roof.body,-280 );
	rope2=new Rope(bob2.body,roof.body,-140)
	rope3=new Rope(bob3.body,roof.body,0)
	rope4=new Rope(bob4.body,roof.body,140)
	rope5=new Rope(bob5.body,roof.body,280)
	
    


	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  

  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
}

function keyPressed(){

	if(keyCode === LEFT_ARROW){

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x :-300 ,y:0} )
	}
}



