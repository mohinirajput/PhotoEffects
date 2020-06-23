var fgImg = null;
var canvas;
var greyImg=null, redImg=null;

function loadImg(){
  var file=document.getElementById("imgFile");
  canvas = document.getElementById("box");
  fgImg = new SimpleImage(file);
  greyImg = new SimpleImage(file);
  redImg = new SimpleImage(file);
  fgImg.drawTo(canvas);
}


function blankAndWhite(){
  if(fgImg==null){
    alert("First load Image");
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
    alert("First load Image");
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

function resetImage() {
  if(fgImg==null){
    alert("No image is loaded");
  }else{
    fgImg.drawTo(canvas);
    greyImg = new SimpleImage(fgImg);
    redImg = new SimpleImage(fgImg);
  }
}

function blurImg(){
alert("done soon");
}

function rainbow(){
  var height = fgImg.getHeight();
  for (var pixel of fgImg.values()) {
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
        pixel.setRed(2 * avg);
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
  fgImg.drawTo(canvas);
}
