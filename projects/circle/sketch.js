function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(128, 128, 128);
}

function draw() {
  // put drawing code here
  background(128, 128, 128);
  if(mouseIsPressed){
    r = 255;
    g = 255;
    b = 255;
    fill(r, g, b);
    r = 10;
    beginShape();
     vertex(mouseX+100, mouseY);
     vertex(mouseX+31,mouseY+95);
     vertex(mouseX-81,mouseY+59);
     vertex(mouseX-81,mouseY-59);
     vertex(mouseX+31,mouseY-95);
  } else {
    r = 255;
    g = 255;
    b = 255;
  }
}