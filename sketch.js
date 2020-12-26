var ball
//nmae space
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world

  box=Bodies.rectangle(230,150,40,40,{restitution:1.5})
  World.add(world,box)
  console.log (box)

  ground=Bodies.rectangle(width/2,height-30,width,10,{isStatic:true})
  World.add(world,ground)

  ball=Bodies.circle(130,150,40,{restitution:1.0})
  World.add(world,ball)
  
}

function draw() {
  background('yellow');  
 Engine.update(engine) 

rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50)

rect(ground.position.x,ground.position.y,width,10)

ellipse(ball.position.x,ball.position.y,50,50)

}
