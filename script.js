var junction_image = document.getElementById("junction");
var improx_image = document.getElementById("improx");

junction_image.onclick = function(){
  var info = document.getElementById("info")
  info.innerHTML = "<h2>Junction</h2><p>Junction is a hackathon</p>";
}



function changeText(image){
  if(image.id == "junction"){
    document.getElementByID("info").innerHTML = "<h2>Junction</h2><p>Junction is a hackathon</p>"
  }
}
