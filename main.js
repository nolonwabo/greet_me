  var greetButton = document.getElementById("greet").value;
    var language = document.getElementsByName("language");
var checkGreetings(){
  if(language[0].checked && greetButton.length > 0 === true){
return english;
  }
  else if (language[1].checked && greetButton.length > 0 === true) {
    return afrikaans;
  }
  else if (language[1].checked && greetButton.length > 0 === true) {
    return isixhosa;
  }
}
