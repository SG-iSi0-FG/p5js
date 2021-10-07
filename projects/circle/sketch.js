function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(128, 128, 128);
}

function draw() {
  // put drawing code here
  if(mouseIsPressed){
    r = random(255);
    g = random(255);
    b = random(255);
    fill(r, g, b);
    r = 100;
    ellipse(mouseX, mouseY, r, r);
  } else {
    r = 255;
    g = 255;
    b = 255;
  }
}