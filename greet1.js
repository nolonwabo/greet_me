var greetButton = document.getElementById("greet").value;
  document.getElementById('greet').value='';
    var language = document.getElementsByName("language");
function helloFunction(greetButton, language){
  if(language[0].checked){
    document.getElementById("greeting").innerHTML= 'Hello, '+ greetButton;
  }
    else if(language[1].checked){
        document.getElementById("greeting").innerHTML= 'Hallo, '+ greetButton;
    }
    else if(language[2].checked){
        document.getElementById("greeting").innerHTML= 'Molo, '+ greetButton;
    }
};
