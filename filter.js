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