var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground,case1,case2,case3,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;


	

	case1= new Box(width-250,height-250,200,200);
	case2= new Box(1070,620,10,80);
    case3= new Box(930,620,10,80);

	ground = new Ground(width/2,height-20,width,20);
	ball = new Ball(width/4,height-400,50);
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  }

function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();
 
  case1.display();
//   case2.display();
//   case3.display();
  ground.display();
  ball.display();
 
	 }
	 
	 
	 function keyPressed(){
		if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.35,y:-0.5});
		
		}
	}
