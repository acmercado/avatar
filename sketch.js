var mic;
let micLevel;
let angleShapes = 360;
let r, g, b;

let square1;
let square2;
let square3;
let square4;
let square5;
let square6;
let square7;
let square8;
let square9;
let square10;
let square11;
let square12;
let square13;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  mic = new p5.AudioIn();
  mic.start();
  
  r = 200;
  g = 200;
  b = 200;
  
  //squares drawn
  square1 = new Square(width * .05, height * .175, -25, .5);
  square2 = new Square(width * .1, height * .9, -40, 1.5);
  square3 = new Square(width * .1, height * .4, 15, 1);
  square4 = new Square(width * .15, height * .65, 30, .5);
  square5 = new Square(width * .275, height * .275, -10, 1.5);
  square6 = new Square(width * .3, height * .075, 20, 1);
  square7 = new Square(width * .5, height * .175, 0, .5);
  square8 = new Square(width * .675, height * .075, -20, 1.5);
  square9 = new Square(width * .725, height * .275, 10, 1);
  square10 = new Square(width * .825, height * .625, -30, .5);
  square11 = new Square(width * .9, height * .9, 40, 1.5);
  square12 = new Square(width * .9, height * .4, -15, 1);
  square13 = new Square(width * .95, height * .175, 25, .5);
}


function draw() {
  background(230); 
  
  //squares
  square1.display();
  square2.display();
  square3.display();
  square4.display();
  square5.display();
  square6.display();
  square7.display();
  square8.display();
  square9.display();
  square10.display();
  square11.display();
  square12.display();
  square13.display();
  //falling squares
  square1.move();
  square2.move();
  square3.move();
  square4.move();
  square5.move();
  square6.move();
  square7.move();
  square8.move();
  square9.move();
  square10.move();
  square11.move();
  square12.move();
  square13.move();

  //me
  drawBackHair();
  drawNeck();
  drawJacket();
  drawFace();
  drawFrontHair();
  drawEyebrows();
  
  //cat
  drawCatHead();  
  drawCatEars();
  drawCatEyes();5
  drawCatStripes(); //rotation
  drawCatNose();
  drawCatMouth();
    
  //mic
  micLevel = mic.getLevel(.5);
  
  //mouse scroll
  angleShapes = map(mouseX, 0, 400, 0, 400);
  drawTriangle(mouseX, mouseY);
}


//body
function drawBackHair() {
  noStroke();
  fill(30);
  beginShape();
  curveVertex(width * .25, height * .4);
  curveVertex(width * .4, height * .4);
  curveVertex(width * .5, height * .4);
  curveVertex(width * .75, height * .4);
  curveVertex(width * .8, height * .6);
  curveVertex(width * .85, height * .7);
  curveVertex(width * .82, height * .8);
  curveVertex(width * .88, height * .9);
  curveVertex(width * .7, height * 1);
  curveVertex(width * .5, height * 1);
  curveVertex(width * .3, height * 1);
  curveVertex(width * .12, height * .9);
  curveVertex(width * .18, height * .8);
  curveVertex(width * .15, height * .7);
  curveVertex(width * .2, height * .6);
  endShape(CLOSE);
}
function drawNeck() {
  noStroke();
  fill(242, 223, 199);
  rect(width * .46, height * .7, width * .08, height * .1);
}
function drawJacket() {
  //top of jacket
  noStroke();
  fill(90);
  beginShape();
  vertex(width * .4, height * .8);
  vertex(width * .6, height * .8);
  vertex(width * .7, height * .85);
  vertex(width * .8, height * 1);
  vertex(width * .2, height * 1);
  vertex(width * .3, height * .85);
  vertex(width * .4, height * .8);
  endShape(CLOSE);
  //bottom of jacket
  noStroke();
  fill(200);
  beginShape();
  vertex(width * .35, height * .95);
  vertex(width * .65, height * .95);
  vertex(width * .7, height * 1);
  vertex(width * .3, height * 1);
  endShape(CLOSE);
  //zipper of jackeet
  noStroke();
  fill(255);
  rect(width * .495, height *  .8, width * .01, height * .075);
}
function drawFace() {
  //head
  noStroke();
  fill(242, 223, 199);
  circle(width * .5, height * .5, width * .5);
  //ear
  noStroke();
  fill(242, 223, 199);
  circle(width * .25, height * .575, width * .125);
  //left eye
  fill(51, 30, 3);
  circle(width * .35, height * .575, width * .05);
  //right eye
  fill(51, 30, 3);
  circle(width * .65, height * .575, width * .05);
  //mouth
  stroke(0);
  line(width * .525, height * .625, width * .5, height * .65);
  stroke(0);
  line(width * .5, height * .65, width * .475, height * .625);
}
function drawFrontHair() {
  //top mid hair
  noStroke();
  fill(30);
  beginShape();
  curveVertex(width * .25, height * .4);
  curveVertex(width * .3, height * .3);
  curveVertex(width * .4, height * .225);
  curveVertex(width * .5, height * .2);
  curveVertex(width * .6, height * .225);
  curveVertex(width * .7, height * .3);
  curveVertex(width * .75, height * .4);
  curveVertex(width * .8, height * .7);
  curveVertex(width * .6, height * .4);
  curveVertex(width * .4, height * .4);
  curveVertex(width * .325, height * .5);
  curveVertex(width * .25, height * .7);
  curveVertex(width * .2, height * .5);
  endShape(CLOSE);
  //left-side front hair
  noStroke();
  fill(30);
  beginShape();
  curveVertex(width * .35, height * .37);
  curveVertex(width * .4, height * .4);
  curveVertex(width * .325, height * .5);
  curveVertex(width * .3, height * .6);
  curveVertex(width * .325, height * .7);
  curveVertex(width * .3, height * .8);
  curveVertex(width * .225, height * .75);
  curveVertex(width * .225, height * .7);
  curveVertex(width * .25, height * .6);
  curveVertex(width * .275, height * .5);
  curveVertex(width * .3, height * .4);
  endShape(CLOSE);
  //right-side front hair
  noStroke();
  fill(30);
  beginShape();
  curveVertex(width * .4, height * .4);
  curveVertex(width * .5, height * .3);
  curveVertex(width * .6, height * .25);
  curveVertex(width * .7, height * .3);
  curveVertex(width * .75, height * .4);
  curveVertex(width * .75, height * .6);
  curveVertex(width * .75, height * .7);
  curveVertex(width * .725, height * .75);
  curveVertex(width * .7, height * .8);
  curveVertex(width * .675, height * .7);
  curveVertex(width * .7, height * .6);
  curveVertex(width * .65, height * .55);
  curveVertex(width * .6, height * .55);
  curveVertex(width * .5, height * .5);
  endShape(CLOSE);
}
function drawEyebrows() {
  //left
  stroke(0);
  strokeWeight(5);
  line(width * .28, height * .5, width * .315, height * .475);
  //right
  stroke(0);
  strokeWeight(5);
  line(width * .68, height * .475, width * .715, height * .5);
}

//micLevel embedded in the shapes of "cat"
function drawCatHead() {
  noStroke();
  fill(100);
  circle(width * .7, constrain(height * .3 - micLevel * height * .5, 0, height * .3), width * .2);
}
function drawCatEars() {
  //left ear
  noStroke();
  fill(100);
  triangle(width * .675, constrain(height * .15 - micLevel * height * .5, 0, height * .15), width * .625, constrain(height * .25 - micLevel * height * .5, 0, height * .25), width * .725, constrain(height * .225 - micLevel * height * .5, 0, height * .225));
  //right ear
  noStroke();
  fill(100);
  triangle(width * .85, constrain(height * .24 - micLevel * height * .5, 0, height * .24), width * .76, constrain(height * .24 - micLevel * height * .5, 0, height * .24), width * .8, constrain(height * .3 - micLevel * height * .5, 0, height * .3));
}
function drawCatEyes() {
  noStroke();
  fill(0);
  circle(width * .64, constrain(height * .3 - micLevel * height * .5, 0, height * .3), width * .02);
  circle(width * .74, constrain(height * .35 - micLevel * height * .5, 0, height * .35), width * .02);
}
function drawCatStripes() {
  //left
  push();
  noStroke();
  fill(50);
  translate(width * .7, constrain(height * .225 - micLevel * height * .5, 0, height * .225));
  rectMode(CENTER);
  rotate(50);
  rect(0, 0, width * .008, height * .06);
  pop();
  //middle
  push();
  noStroke();
  fill(50);
  translate(width * .73, constrain(height * .24 - micLevel * height * .5, 0, height * .24));
  rectMode(CENTER);
  rotate(30);
  rect(0, 0, width * .008, height * .06);
  pop();
  //right
  push();
  noStroke();
  fill(50);
  translate(width * .76, constrain(height * .255 - micLevel * height * .5, 0, height * .255));
  rectMode(CENTER);
  rotate(10);
  rect(0, 0, width * .008, height * .06);
  pop();
}
function drawCatNose() {
  noStroke();
  fill(0);
  triangle(width * .66, constrain(height * .34 - micLevel * height * .5, 0, height * .34), width * .685, constrain(height * .353 - micLevel * height * .5, 0, height * .353), width * .665, constrain(height * .36 - micLevel * height * .5, 0, height * .36));
}
function drawCatMouth() {
  //right
  stroke(0);
  strokeWeight(1);
  line(width * .665, constrain(height * .36 - micLevel * height * .5, 0, height * .36), width * .67, constrain(height * .378 - micLevel * height * .5, 0, height * .378));
  //left
  stroke(0);
  strokeWeight(1);
  line(width * .665, constrain(height * .36 - micLevel * height * .5, 0, height * .36), width * .65, constrain(height * .368 - micLevel * height * .5, 0, height * .368));
}

//background: changes colors when clicked
function mousePressed(){
  if (mouseX < width * 0.5 && mouseY < width * 0.5) {
    r = random(255);
    g = 0;
    b = 0;
  } else if (mouseX < width * 0.5 && mouseY > width * 0.5) {
    r = 0;
    g = random(255);
    b = 0;
  } else if (mouseX > width * 0.5 && mouseY < width * 0.5) {
    r = 0;
    g = 0;
    b = random(255);
  } else if (mouseX > width * 0.5 && mouseY > width * 0.5) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}


function drawTriangle(angleShapes) {
  push();
  translate(mouseX, mouseY);
  rotate(angleShapes);
  beginShape();
  fill(203, 173, 255);
    vertex(width * .1, height * .1);
    vertex(width * .15, height * .0225);
    vertex(width * .2, height * .1);
  beginContour();
    vertex(width * .125, height * .0875);
    vertex(width * .15, height * .045);
    vertex(width * .175, height * .0875);
  endContour();
  endShape(CLOSE);
  pop();
}