var paperObject;
class Paper extends PaperClass {
  constructor (x,y){
    paperObject = Matter.Bodies.circle(x,y,25,options);
    var options= {
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2
    }
  }

function keyPressed() {
  if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}