var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});

//function(){
  //  if(isPurple){
    //    document.body.style.background = "white";
    //} else {
    //document.body.style.background = "purple";
    //}
    //isPurple = !isPurple;