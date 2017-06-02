var greetButton = document.getElementById("greet").value;
var language = document.getElementsByName("language");
var output = document.getElementById('greeting');

function radioButton(){
  if(document.getElementById('English').checked === true){
    return 'English';
  }

  else if(document.getElementById('Afrikaans').checked === true){
    return 'Afrikaans';
  }

  else if(document.getElementById('Isixhosa').checked === true){
    return 'Isixhosa';
  }
  else{
    return 'none';
  }
}
