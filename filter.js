var fgImg = null, blurImg=null;
var canvas;
var greyImg=null, redImg=null, rainbowImg=null, blueImg=null, greenImg=null, borderOnImg=null;


// load Image to canvas
function loadImg(){
  var file=document.getElementById("imgFile");
  canvas = document.getElementById("box");
  fgImg = new SimpleImage(file);
  greyImg = new SimpleImage(file);
  redImg = new SimpleImage(file);
  rainbowImg = new SimpleImage(file);
  blueImg = new SimpleImage(file);
  greenImg = new SimpleImage(file);
  borderOnImg = new SimpleImage(file);
  fgImg.drawTo(canvas);
}


// add border to image
function addBorder(){
  if(fgImg==null)
    alert("Image not loaded");
  else{
    var height1 = borderOnImg.getHeight();
    var widhth1 = borderOnImg.getWidth();
    console.log(height1);
    for(var px of borderOnImg.values()){
      var count = px.getY();
      var count1 = px.getX();
      if(count<height1/13 || count>12*(height1/13) || count1<widhth1/13 || count1>12*(widhth1/13)){
        px.setRed(128);
        px.setGreen(0);
        px.setBlue(42);
        count++;
      }
      borderOnImg.drawTo(canvas);
    }
  }
}

// convert Image to blank and white 
function blankAndWhite(){
  if(fgImg==null){
    alert("Image not loaded");
  }else{
    for(var pixel of greyImg.values()){
      var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
      pixel.setRed(avg);
      pixel.setBlue(avg);
      pixel.setGreen(avg);
    }
    greyImg.drawTo(canvas);
  }
}
function redColor(){
  if(fgImg==null){
    alert("Image not loaded");
  }else{
  for(var pixel of redImg.values()){
    var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    if(avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }else{
      pixel.setRed(255);
      pixel.setBlue(2*avg-255);
      pixel.setGreen(2*avg-255);
    }
  }
  redImg.drawTo(canvas);
}
}


// convert image to blue scale
function blueColor(){
  if(fgImg==null){
    alert("Image not loaded");
  }else{
  for(var pixel of blueImg.values()){
    var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    if(avg<128){
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(2*avg);
    }else{
      pixel.setRed(2*avg-255);
      pixel.setBlue(255);
      pixel.setGreen(2*avg-255);
    }
  }
  blueImg.drawTo(canvas);
}
}


// convert Image color to green
function greenColor(){
  if(fgImg==null){
    alert("Image not loaded");
  }else{
  for(var pixel of greenImg.values()){
    var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    if(avg<128){
      pixel.setRed(0);
      pixel.setGreen(2*avg);
      pixel.setBlue(0);
    }else{
      pixel.setRed(2*avg-255);
      pixel.setBlue(2*avg-255);
      pixel.setGreen(255);
    }
  }
  greenImg.drawTo(canvas);
}
}

// reset Image to original
function resetImage() {
  if(fgImg==null){
    alert("Image not loaded");
  }else{
    fgImg.drawTo(canvas);
    greyImg = new SimpleImage(fgImg);
    redImg = new SimpleImage(fgImg);
    blueImg = new SimpleImage(fgImg);
    greenImg = new SimpleImage(fgImg);
    rainbowImg = new SimpleImage(fgImg);
    borderOnImg = new SimpleImage(fgImg);
    blurImg = new SimpleImage(fgImg);

  }
}
// blur by moving random pixels
function ensureInImage (coordinate, size) {
  // coordinate cannot be negative
  if (coordinate < 0) {
      return 0;
  }
  // coordinate must be in range [0 .. size-1]
  if (coordinate >= size) {
      return size - 1;
  }
  return coordinate;
}

function getPixelNearby (blurImg, x, y, diameter) {
  var dx = Math.random() * diameter - diameter / 2;
  var dy = Math.random() * diameter - diameter / 2;
  var nx = ensureInImage(x + dx, blurImg.getWidth());
  var ny = ensureInImage(y + dy, blurImg.getHeight());
  return blurImg.getPixel(nx, ny);
}


function blurM(){
  if(fgImg==null){
    alert("Image Not Loaded");
  }else{
  console.log("blurr");
  blurImg = new SimpleImage(fgImg);
  var output = new SimpleImage(blurImg.getWidth(), blurImg.getHeight());
  for (var pixel of blurImg.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (Math.random() > 0.5) {
      var other = getPixelNearby(blurImg, x, y, 10);
      output.setPixel(x, y, other);
    }
    else {
      output.setPixel(x, y, pixel);
    }
  }
  output.drawTo(canvas);
}
}
// code for rainbow
function rainbow(){
  if(fgImg==null){
    alert("Image not loaded");
  }else{
  var height = rainbowImg.getHeight();
  for (var pixel of rainbowImg.values()) {
    var y = pixel.getY();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (y < height / 7) {
      //red
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 2 / 7) {
      //orange
      if (avg < 128) {
        pixel.setRed(2 * avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 3 / 7) {
      //yellow
      if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 4 / 7) {
      //green
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg - 255);
      }
    } else if (y < height * 5 / 7) {
      //blue
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else if (y < height * 6 / 7) {
      //indigo
      if (avg < 128) {
        pixel.setRed(.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else {
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(255);
      }
    } else {
      //violet
      if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      } else {
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2 * avg - 255);
        pixel.setBlue(0.4*avg+153);
      }
    }
  }
  rainbowImg.drawTo(canvas);
}
}