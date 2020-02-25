// refer to javascript.info/class

class Square {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
  }

// you don't have to put "function" within a "class"
  display() {
    
    // drawing squares
    push();
    noStroke();
    fill(r, g, b, 200);
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    scale(this.size);
    rectMode(CENTER);
    rect(0, 0, width * .1, height * .1);
    pop();
  }
  
  move() {
    // rotation
    // this.angle++ is shorthand for this.angle = this.angle + 1
    this.rotation++;
    
    // falling
    if (this.yPos <= height * 1.1){
    // this.yPos = this.yPos+2;
    // shorthand below is +=
    this.yPos += 2;
    } else {
      this.yPos = -height * 0.1;
    }
  }
}