var fgImg = null;
var fgbox;

function loadImg(){
  var file=document.getElementById("imgFile");
  fgImg = new SimpleImage(file);
  fgbox = document.getElementById("box");
  fgImg.drawTo(fgbox);
}

function blankAndWhite(){
  if(fgImg==null){
    alert("First load Image");
  }else{
    for(var pixel of fgImg.values()){
      var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
      pixel.setRed(avg);
      pixel.setBlue(avg);
      pixel.setGreen(avg);
    }
    fgImg.drawTo(fgbox);
  }
}