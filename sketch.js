
var boyImg, pathImg, coin, runner, road, left, right, edges
function preload(){ 
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png") 
  pathImg = loadImage("path.png")
  console.log("Loaded preload") 
}

function setup() { 
  createCanvas(400, 400);
  road = createSprite(200, 200)
  road.addImage("background", pathImg)
  road.scale = 1.2
  left = createSprite(0, 0, 100, 800)
  left.visible = false
  right = createSprite(400, 0, 100, 800)
  right.visible = false
  runner = createSprite(180, 340, 30, 30)
  runner.addAnimation("moving boy", boyImg)
  runner.scale = 0.08
  console.log("Loaded setup")
  edges = createEdgeSprites()
}

function draw() { 
  background("blue");
  road.velocityY = 4
  runner.x = World.mouseX;
  runner.collide(edges[3])
  runner.collide(left)
  runner.collide(right)
  if (road.y > 400) {
    road.y = height / 2; 
  }
  drawSprites()
 }
