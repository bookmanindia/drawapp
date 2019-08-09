var lineWeight = 10;
function setup() {
  var drawing = createCanvas(windowWidth/2, windowHeight);
  drawing.parent('wrapper');
  background(255);
  strokeWeight(lineWeight);
}

function draw() {
  stroke(0);
  strokeWeight(lineWeight);
  strokeCap(ROUND);
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

$('#ten-px').click(function(){
  lineWeight = 10;
  $(this).addClass('active');
  $('#two-px').removeClass('active');
});

$('#two-px').click(function(){
  lineWeight = 2;
  $(this).addClass('active');
  $('#ten-px').removeClass('active');
});